const { app, BrowserWindow, contextBridge  } = require('electron');
const { join } = require('path');
const { format } = require('url');

function createWindow() {
  // Cria uma janela de navegação
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Verifica se está no ambiente de desenvolvimento ou de produção
  const isDev = process.env.NODE_ENV === 'development';

  if (isDev) {
    // Carrega a URL do servidor de desenvolvimento do Next.js
    win.loadURL('http://localhost:3000/');
} else {
      win.loadURL('http://localhost:3000/');
    // Carrega o arquivo index.html gerado pelo Next.js
    // win.loadURL(format({
    //   pathname: join(__dirname, '.next', 'renderer', 'index.html'),
    //   protocol: 'file:',
    //   slashes: true
    // }));
  }
}

// Quando o Electron terminar de inicializar e estiver pronto para criar janelas do navegador.
app.whenReady().then(createWindow);
