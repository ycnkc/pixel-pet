const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let win;

function createWindow() {
  const win = new BrowserWindow({
    width: 340,
    height: 340,
    frame: false,
    resizable: false,
    icon: path.join(__dirname, 'assets', 'images', 'cat-icon.png'),
    webPreferences: {
      nodeIntegration: true, 
      contextIsolation: false
    },
  });

  win.loadFile('tamagotchi.html'); 
}

ipcMain.on('close', () => {
  app.quit()
})

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
