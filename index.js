const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    fullscreen: true,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });
  // pressing alt can bring up the menu bar even when its hidden. This accounts for that and disables it entirely
  win.setMenu(null);

  let appUrl = "https://youtube.com/tv";
  let userAgent =
    "Mozilla/5.0 (PS4; Leanback Shell) Gecko/20100101 Firefox/65.0 LeanbackShell/01.00.01.75 Sony PS4/ (PS4, , no, CH)";
  let zoomFactor = 0.5;

  if (process.env.APP_URL) {
    appUrl = process.env.APP_URL;
  }

  if (process.env.USER_AGENT) {
    userAgent = process.env.USER_AGENT;
  }

  if (process.env.ZOOM_FACTOR) {
    zoomFactor = process.env.ZOOM_FACTOR;
  }

  win.loadURL(
    appUrl,
    userAgent.length
      ? {
          userAgent,
        }
      : {},
  );

  // setting zoom 50% to enable higher resolutions. has no effect on the applications UI.
  if (zoomFactor > 0) {
    win.webContents.on("did-finish-load", () => {
      win.webContents.setZoomFactor(0.5);
    });
  }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
