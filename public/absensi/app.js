'use strict';
(() => {
  const $ = id => document.getElementById(id);
  const form = $('attendance');
  const endpoint = window.ARTA_ATTENDANCE?.endpoint || '';
  const video = $('camera');
  let photo = '', busy = false, stream = null, cameraRequest = 0, opening = false, staffReady = false;
  let staffNames = [], selectedName = '', matches = [], activeOption = -1;
  const action = () => form.elements.action.value;
  const dateLabel = () => { $('today').textContent = new Intl.DateTimeFormat('id-ID',{weekday:'long',day:'numeric',month:'long',year:'numeric',timeZone:'Asia/Jakarta'}).format(new Date()); };
  const refreshClock = () => { dateLabel(); $('current-time').textContent = new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false,timeZone:'Asia/Jakarta'}).format(new Date()) + ' WIB'; };
  refreshClock(); setInterval(refreshClock,1000);
  const showError = message => { $('error').textContent = message; $('error').hidden = false; };
  function sync() {
    $('location-field').hidden = form.elements.mode.value !== 'WFA';
    $('location').required = form.elements.mode.value === 'WFA';
    $('submit').textContent = busy ? 'Menyimpan absensi…' : action() === 'in' ? 'Kirim absen masuk' : 'Kirim absen pulang';
    $('submit').disabled = busy || opening || !endpoint || !staffReady || !selectedName || !photo || !!stream;
    $('open-camera').disabled = busy || opening;
    $('open-camera').textContent = opening ? 'Membuka kamera…' : photo ? 'Ambil ulang foto' : 'Buka kamera';
  }
  function stopCamera() {
    ++cameraRequest; opening = false;
    if (stream) stream.getTracks().forEach(track => track.stop());
    stream = null; video.srcObject = null; video.hidden = true;
    $('capture').hidden = true; $('capture').disabled = true;
    $('cancel-camera').hidden = true; $('open-camera').hidden = false;
    $('camera-placeholder').hidden = !!photo;
    sync();
  }
  function clearPhoto() {
    photo = ''; $('preview').removeAttribute('src'); $('preview').hidden = true;
    stopCamera(); $('camera-status').textContent = 'Foto wajib saat masuk dan pulang.';
  }
  function closeNames() { $('staff-options').hidden = true; $('name').setAttribute('aria-expanded','false'); $('name').removeAttribute('aria-activedescendant'); activeOption = -1; }
  function chooseName(name) { selectedName = name; $('name').value = name; $('name').setCustomValidity(''); closeNames(); clearPhoto(); }
  function showNames() {
    if (!staffReady) return;
    const query = $('name').value.trim().toLocaleLowerCase('id');
    matches = staffNames.filter(name=>name.toLocaleLowerCase('id').includes(query)); activeOption = -1;
    $('staff-options').replaceChildren();
    matches.forEach((name,index)=>{
      const item = document.createElement('li'); item.id = 'staff-option-'+index; item.setAttribute('role','option'); item.setAttribute('aria-selected','false'); item.textContent = name;
      item.addEventListener('mousedown',event=>event.preventDefault());
      item.addEventListener('click',()=>chooseName(name)); $('staff-options').append(item);
    });
    if (!matches.length) { const item=document.createElement('li'); item.className='empty'; item.textContent='Nama tidak ditemukan. Hubungi HR.'; $('staff-options').append(item); }
    $('staff-options').hidden=false; $('name').setAttribute('aria-expanded','true'); $('name').removeAttribute('aria-activedescendant');
  }
  $('name').addEventListener('input',()=>{selectedName=''; $('name').setCustomValidity('Pilih nama dari daftar yang tersedia.'); clearPhoto(); showNames();});
  $('name').addEventListener('focus',showNames);
  $('name').addEventListener('blur',()=>setTimeout(closeNames,150));
  $('name').addEventListener('keydown',event=>{
    if (event.key==='Escape') return closeNames();
    if (event.key==='Enter' && !$('staff-options').hidden) { event.preventDefault(); if(activeOption>=0) chooseName(matches[activeOption]); else if(matches.length===1) chooseName(matches[0]); return; }
    if (!['ArrowDown','ArrowUp'].includes(event.key)) return;
    event.preventDefault(); if($('staff-options').hidden) showNames(); if(!matches.length) return;
    activeOption=(activeOption+(event.key==='ArrowDown'?1:-1)+matches.length)%matches.length;
    Array.from($('staff-options').children).forEach((item,index)=>item.setAttribute('aria-selected',String(index===activeOption)));
    const item=$('staff-options').children[activeOption]; $('name').setAttribute('aria-activedescendant',item.id); item.scrollIntoView({block:'nearest'});
  });
  async function loadStaff() {
    staffReady = false; $('name').disabled = true; $('reload-staff').hidden = true; sync();
    const controller = new AbortController(); const timer = setTimeout(() => controller.abort(),30000);
    try {
      if (!endpoint) throw new Error('Absensi belum diaktifkan oleh HR.');
      const response = await fetch(endpoint + '?action=staff',{credentials:'omit',signal:controller.signal});
      if (!response.ok) throw new Error('Daftar staff belum dapat dimuat.');
      const result = await response.json();
      if (!result.ok || !Array.isArray(result.staff) || !result.staff.length) throw new Error(result.message || 'Daftar staff kosong. Hubungi HR.');
      staffNames = result.staff.filter(name=>typeof name==='string' && name.trim());
      $('name').placeholder='Ketik lalu pilih nama staff';
      staffReady = true; $('name').disabled = false; $('error').hidden = true;
    } catch (error) {
      $('name').placeholder='Daftar staff belum tersedia';
      $('reload-staff').hidden = false;
      showError(error.name === 'AbortError' || error instanceof TypeError ? 'Gagal memuat daftar staff. Periksa internet, lalu muat ulang.' : error.message);
    } finally { clearTimeout(timer); sync(); }
  }
  $('reload-staff').addEventListener('click',loadStaff);
  $('open-camera').addEventListener('click',async () => {
    if (busy || opening) return;
    $('error').hidden = true;
    if (!window.isSecureContext || !navigator.mediaDevices?.getUserMedia) return showError('Kamera tidak tersedia. Buka halaman ini melalui HTTPS di Safari atau Chrome dan izinkan kamera.');
    clearPhoto(); opening = true; const request = ++cameraRequest; sync();
    $('cancel-camera').hidden = false;
    $('camera-status').textContent = 'Izinkan akses kamera pada browser untuk melanjutkan.';
    let acquired = null;
    try {
      acquired = await navigator.mediaDevices.getUserMedia({audio:false,video:{facingMode:'user',width:{ideal:1200},height:{ideal:1200}}});
      if (request !== cameraRequest || document.hidden) { acquired.getTracks().forEach(track => track.stop()); return; }
      stream = acquired; video.srcObject = stream; video.hidden = false;
      $('camera-placeholder').hidden = true; $('open-camera').hidden = true;
      $('capture').hidden = false;
      stream.getVideoTracks().forEach(track => track.addEventListener('ended',() => { if (stream === acquired) { stopCamera(); showError('Kamera terputus. Buka kamera kembali.'); } }));
      await video.play();
      if (request !== cameraRequest) return;
      $('capture').disabled = !video.videoWidth;
      $('camera-status').textContent = 'Pastikan wajah dan latar tempat kerja terlihat, lalu ambil foto.';
    } catch (error) {
      if (request !== cameraRequest) { acquired?.getTracks().forEach(track=>track.stop()); return; }
      stopCamera();
      showError(error.name === 'NotAllowedError' ? 'Akses kamera ditolak. Izinkan kamera pada pengaturan browser, lalu coba lagi.' : error.name === 'NotFoundError' ? 'Kamera tidak ditemukan. Gunakan HP atau perangkat yang memiliki kamera.' : 'Kamera tidak dapat dibuka. Tutup aplikasi lain yang memakai kamera, lalu coba lagi.');
    } finally { if (request === cameraRequest) { opening = false; sync(); } }
  });
  video.addEventListener('loadeddata',()=>{ $('capture').disabled = !stream || !video.videoWidth; });
  $('cancel-camera').addEventListener('click',()=>{ stopCamera(); $('camera-status').textContent = 'Foto wajib saat masuk dan pulang.'; });
  $('capture').addEventListener('click',()=>{
    if (!stream || !video.videoWidth || video.readyState < 2) return showError('Tunggu hingga gambar kamera terlihat.');
    const scale = Math.min(1,1200/Math.max(video.videoWidth,video.videoHeight));
    const canvas = document.createElement('canvas'); canvas.width = Math.round(video.videoWidth*scale); canvas.height = Math.round(video.videoHeight*scale);
    const context = canvas.getContext('2d'); context.drawImage(video,0,0,canvas.width,canvas.height);
    const image = canvas.toDataURL('image/jpeg',.78);
    if (image.length > 2800000) return showError('Foto terlalu besar. Coba ambil ulang.');
    photo = image; $('preview').src = image; $('preview').hidden = false; stopCamera();
    $('camera-status').textContent = 'Foto siap dikirim.'; $('error').hidden = true; sync();
  });
  form.addEventListener('change',event=>{
    if (['mode','action','name'].includes(event.target.name)) clearPhoto();
    sync();
  });
  form.addEventListener('submit',async event=>{
    event.preventDefault(); if (busy || opening || stream || !endpoint || !staffReady || !form.reportValidity()) return;
    $('error').hidden = true;
    if (!selectedName || $('name').value !== selectedName) return showError('Pilih nama dari daftar staff.');
    if (!photo) return showError('Ambil foto langsung dari kamera sebelum mengirim absensi.');
    if (!navigator.onLine) return showError('Internet terputus. Sambungkan kembali, lalu kirim ulang.');
    const payload = {name:selectedName,mode:form.elements.mode.value,action:action(),location:$('location').value.trim(),photo};
    busy = true; $('fields').disabled = true; sync();
    const controller = new AbortController(); const timeout = setTimeout(()=>controller.abort(),90000);
    try {
      const response = await fetch(endpoint,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(payload),redirect:'follow',credentials:'omit',signal:controller.signal});
      if (!response.ok) throw new Error('Server belum merespons. Coba kirim ulang.');
      const result = await response.json();
      if (!result.ok) throw new Error(result.message || 'Absensi belum tersimpan. Hubungi HR.');
      form.hidden = true; $('success').hidden = false;
      $('success-title').textContent = result.duplicate ? 'Absensi sudah tercatat' : payload.action === 'in' ? 'Selamat bekerja 💪😍' : 'Selamat istirahat 👋☺️';
      $('receipt').textContent = `${result.name}\n${payload.action === 'in' ? 'Masuk' : 'Pulang'} · ${result.mode}\n${result.time} WIB\n${result.date}`;
      photo = ''; $('preview').removeAttribute('src'); $('preview').hidden = true;
    } catch (error) { showError(error instanceof TypeError || error.name === 'AbortError' ? 'Konfirmasi belum diterima. Coba kirim ulang; absensi ganda akan dicegah otomatis.' : error.message); }
    finally { clearTimeout(timeout); busy = false; $('fields').disabled = false; sync(); }
  });
  $('again').addEventListener('click',()=>{ form.reset(); selectedName=''; $('name').setCustomValidity(''); closeNames(); form.hidden=false; $('success').hidden=true; $('error').hidden=true; clearPhoto(); dateLabel(); });
  window.addEventListener('pagehide',stopCamera);
  document.addEventListener('visibilitychange',()=>{ if(document.hidden) stopCamera(); else dateLabel(); });
  loadStaff();
})();
