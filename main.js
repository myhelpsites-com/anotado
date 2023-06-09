const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const db = require('./db/useData');

let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1300,
    height: 800,
    maximizable: true,
    maximized: true,
    
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true,
      allowRunningInsecureContent: false,
      webSecurity: true,
      newWindow: false, // Desativa a abertura de nova janela
    },
  });

  mainWindow.loadFile('src/index.html');

  ipcMain.on('save-value', (event, value) => {
    // Salvar o valor recebido no banco de dados
    db.run("INSERT INTO inputs (value) VALUES (?)", value, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Valor inserido com sucesso!');
      }
    });
  });

  ipcMain.on('get-all', async (event, value) => {
    try {
      const rows = await db.all("SELECT * FROM inputs");
      const values = rows.map(row => row.value);
      event.reply('all-values', values);
    } catch (err) {
      console.error(err);
      event.reply('all-values', []);
    }
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
