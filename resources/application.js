const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    console.log(__dirname);

    win.loadFile('resources/renderer/frame.html');
}

app.whenReady().then(() => {
    ipcMain.handle('ping', () => 'pong');
    createWindow();
});
