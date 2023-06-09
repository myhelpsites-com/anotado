const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const db = require('./db/useData');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1300,
    height: 800,
    maximized: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true
    },
  });

  mainWindow.loadFile('src/index.html');

  ipcMain.on('save-value', (event, value) => {
    // Salva o valor recebido no banco de dados
    db.run("INSERT INTO inputs (value) VALUES (?)", value, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Valor inserido com sucesso!');
      }
    });
  });
  ipcMain.on('get-all', (event, value) => {
    // Salva o valor recebido no banco de dados
    return db.all("SELECT * FROM inputs", (err, rows) => {
        if (err) {
        } else {
          return rows.forEach((row) => {
            return row.value
          });
        }
      });
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
