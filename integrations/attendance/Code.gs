/** ARTA attendance. Configure SPREADSHEET_ID and PHOTO_FOLDER_ID in Script Properties. */
const TZ = 'Asia/Jakarta';
function json_(value) { return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON); }
function fail_(message) { const e = new Error(message); e.publicMessage = message; throw e; }
function normalize_(value) { return String(value || '').trim().replace(/\s+/g, ' ').toLowerCase(); }
function safeText_(value) { const text = String(value).trim(); return /^[=+@\-]/.test(text) ? "'" + text : text; }
function dateKey_(value) {
  if (value instanceof Date && !isNaN(value.getTime())) return Utilities.formatDate(value, TZ, 'yyyy-MM-dd');
  const match = String(value).match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  return match ? match[3] + '-' + match[2].padStart(2,'0') + '-' + match[1].padStart(2,'0') : '';
}
function rows_(sheet) { return sheet.getLastRow() > 1 ? sheet.getRange(2,1,sheet.getLastRow()-1,6).getValues() : []; }
function findDay_(rows, name, day) { return rows.find(row => normalize_(row[1]) === normalize_(name) && dateKey_(row[2]) === day); }
function validate_(p) {
  if (!p || !['WFO','WFA'].includes(p.mode) || !['in','out'].includes(p.action)) fail_('Pilih WFO/WFA dan jenis absensi.');
  if (typeof p.name !== 'string' || !p.name.trim() || p.name.length > 100) fail_('Isi nama lengkap yang terdaftar di HR.');
  if (p.mode === 'WFA' && (typeof p.location !== 'string' || !p.location.trim() || p.location.length > 120)) fail_('Isi lokasi WFA, maksimal 120 karakter.');
  if ((typeof p.photo !== 'string' || !/^data:image\/jpeg;base64,[A-Za-z0-9+/]+=*$/.test(p.photo) || p.photo.length > 2800000)) fail_('Foto kamera wajib untuk absen masuk dan pulang, maksimal 2 MB.');
}
function doGet(e) {
  try {
    if (e && e.parameter && e.parameter.action === 'staff') {
      const id = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
      if (!id) fail_('Sistem belum diaktifkan. Hubungi HR.');
      const sheet = SpreadsheetApp.openById(id).getSheetById(472693755);
      if (!sheet) fail_('Tab DATA STAFF tidak ditemukan.');
      const names = sheet.getLastRow() > 1 ? sheet.getRange(2,1,sheet.getLastRow()-1,1).getDisplayValues().map(r=>r[0].trim()).filter(Boolean) : [];
      return json_({ok:true,staff:Array.from(new Set(names)).sort((a,b)=>a.localeCompare(b,'id'))});
    }
    return json_({ok:true,service:'ARTA attendance',version:2});
  } catch (error) { return json_({ok:false,message:error.publicMessage || 'Daftar staff belum dapat dimuat. Hubungi HR.'}); }
}
function doPost(e) {
  const received = new Date();
  const lock = LockService.getScriptLock();
  let locked = false;
  try {
    if (!e || !e.postData || e.postData.contents.length > 2900000) fail_('Kiriman tidak valid atau terlalu besar.');
    let p; try { p = JSON.parse(e.postData.contents); } catch (_) { fail_('Format kiriman tidak valid.'); }
    validate_(p);
    const props = PropertiesService.getScriptProperties();
    const id = props.getProperty('SPREADSHEET_ID');
    const folderId = props.getProperty('PHOTO_FOLDER_ID');
    if (!id || !folderId) fail_('Sistem belum diaktifkan. Hubungi HR.');
    locked = lock.tryLock(20000); if (!locked) fail_('Sistem sedang sibuk. Coba kirim ulang beberapa saat lagi.');
    const book = SpreadsheetApp.openById(id);
    const staffSheet = book.getSheetById(472693755);
    const incoming = book.getSheetById(142619344);
    const outgoing = book.getSheetById(62551951);
    if (!staffSheet || !incoming || !outgoing) fail_('Konfigurasi tab HR perlu diperiksa.');
    const names = staffSheet.getRange(2,1,Math.max(1,staffSheet.getLastRow()-1),1).getDisplayValues().map(r=>r[0]);
    const name = names.find(n => n.trim() && normalize_(n) === normalize_(p.name));
    if (!name) fail_('Nama belum cocok dengan daftar staff. Gunakan nama lengkap atau hubungi HR.');
    const target = p.action === 'in' ? incoming : outgoing;
    const day = Utilities.formatDate(received,TZ,'yyyy-MM-dd');
    const existing = findDay_(rows_(target),name,day);
    if (existing) {
      const time = existing[4] instanceof Date ? Utilities.formatDate(existing[4],TZ,'HH:mm:ss') : String(existing[4]);
      return json_({ok:true,duplicate:true,name,mode:String(existing[3]).startsWith('WFA')?'WFA':'WFO',date:Utilities.formatDate(received,TZ,'dd/MM/yyyy'),time});
    }
    if (p.action === 'out' && !findDay_(rows_(incoming),name,day)) fail_('Belum ada absen masuk hari ini. Hubungi HR jika bekerja melewati tengah malam.');
    const location = p.mode === 'WFO' ? 'Kantor ARTA' : 'WFA — ' + p.location.trim();
    let photoUrl = '';
    {
      const bytes = Utilities.base64Decode(p.photo.split(',')[1]);
      if (bytes.length < 4 || (bytes[0]&255)!==255 || (bytes[1]&255)!==216 || (bytes[2]&255)!==255) fail_('File foto tidak valid. Ambil foto ulang.');
      const filename = day + '_' + Utilities.getUuid() + '.jpg';
      const file = DriveApp.getFolderById(folderId).createFile(Utilities.newBlob(bytes,'image/jpeg',filename));
      // Inherits the HR folder's permissions; never makes photos public.
      photoUrl = file.getUrl();
    }
    // Store genuine date/time values so existing HR formulas keep working.
    const midnight = Utilities.parseDate(day,TZ,'yyyy-MM-dd');
    const clock = Utilities.formatDate(received,TZ,'HH:mm:ss').split(':').map(Number);
    const fraction = (clock[0]*3600+clock[1]*60+clock[2])/86400;
    const row = target.getLastRow()+1;
    target.getRange(row,1,1,6).setValues([[received,safeText_(name),midnight,safeText_(location),fraction,photoUrl]]);
    target.getRange(row,1).setNumberFormat('dd/MM/yyyy HH:mm:ss');
    target.getRange(row,3).setNumberFormat('dd/MM/yyyy');
    target.getRange(row,5).setNumberFormat('HH:mm:ss');
    SpreadsheetApp.flush();
    return json_({ok:true,duplicate:false,name,mode:p.mode,date:Utilities.formatDate(received,TZ,'dd/MM/yyyy'),time:Utilities.formatDate(received,TZ,'HH:mm:ss')});
  } catch (error) { return json_({ok:false,message:error.publicMessage || 'Absensi belum dapat dikonfirmasi. Coba kirim ulang atau hubungi HR.'}); }
  finally { if (locked) lock.releaseLock(); }
}
