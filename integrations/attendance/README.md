# ARTA attendance

Static, mobile-friendly form at `/absensi/`, deployed by the existing GitHub Pages workflow. The backend is Google Apps Script; no Google credentials are placed in browser code or this repository.

## Behavior

- Choose WFO or WFA first, then Masuk or Pulang.
- Choose the staff name from a searchable dropdown sourced from DATA STAFF. The backend matches against column A of DATA STAFF (case/whitespace insensitive).
- WFO location is Kantor ARTA. WFA requires a location description.
- Both Masuk and Pulang require a new photo captured through getUserMedia, compressed locally to JPEG (longest edge 1200 px). There is no file input or gallery option. Camera denial or absence blocks submission. Streams stop after capture, cancellation, tab hiding, or navigation. Changing staff, mode, or action discards the photo.
- Server time in Asia/Jakarta is authoritative. Six columns A:F match the existing Absen Masuk and Absen Keluar tabs. Old rows/headers are preserved.
- One entry per staff/day/action. A script lock serializes checks and writes. Retries return the existing attendance without adding another row.
- Checkout requires a check-in on the same Jakarta calendar day. Overnight shifts require HR correction; this MVP assumes same-day attendance.
- A success screen requires a readable, successful backend response. Network failures never display a fabricated success.

## Backend setup/recovery

1. Create an Apps Script project owned by an account with edit access to the HR spreadsheet and write access to a restricted photo folder.
2. Paste `Code.gs`; set timezone to Asia/Jakarta.
3. In Script Properties, set `SPREADSHEET_ID` and `PHOTO_FOLDER_ID`. Keep these runtime values outside the public repository.
4. Confirm sheet IDs in Code.gs against the HR workbook (staff 472693755, incoming 142619344, outgoing 62551951).
5. Deploy as Web app, execute as owner, access Anyone. The owner authorizes Sheets and Drive scopes. Google displays broad scopes for these Apps Script services; the implementation only uses the configured workbook/folder.
6. Set the returned `/exec` URL in `public/absensi/config.js`, then publish the website.
7. For backend changes, update the existing deployment to a new version to retain the endpoint URL.

The photo folder must be shared with named HR users by its owner before those users can open photo links. Never enable public link sharing for the folder or photos. The staff endpoint exposes names only for the requested dropdown. It never returns photo links, attendance history, or other staff columns.

This MVP verifies that a submitted name is on the HR list; it does not authenticate identity or prove office presence. A static QR can be shared. Camera-only is enforced in the UI, not device attestation: a modified client or virtual camera is outside this guarantee. Add staff authentication or individual PINs if stronger verification is required. There is no face recognition or GPS tracking.

Drive and Sheets are separate services: if upload succeeds but the sheet write fails, a private orphan image may remain in the folder. HR can review and remove such unused photos. Attendance retries still check the sheet before uploading a new photo.

## Verification

`node --test integrations/attendance/*.test.cjs`

`node --check public/absensi/app.js`

`npm run build`

Then test all four mode/action combinations in a browser. Production smoke tests should use an unknown test name to verify validation without writing false attendance. A full positive storage test should use a separate test workbook/folder or an explicitly approved test staff entry.
