// /**
//  * This file is loaded via the <script> tag in the index.html file and will
//  * be executed in the renderer process for that window. No Node.js APIs are
//  * available in this process because `nodeIntegration` is turned off and
//  * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
//  * to expose Node.js functionality from the main process.
//  */
// // This file is required by the index.html file and will
// // be executed in the renderer process for that window.
// // All APIs exposed by the context bridge are available here.

// // Binds the buttons to the context bridge API.
// document.getElementById('open-in-browser').addEventListener('click', () => {
//     shell.open();
//   });