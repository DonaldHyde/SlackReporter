const electron = require('electron');

const { app, BrowserWindow } = electron;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  // mainWindow = new BrowserWindow({width: 300, height: 282, frame: false});
  mainWindow = new BrowserWindow({
    width: 300,
    height: 270,
    titleBarStyle: 'hidden',
    resizable: false
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // mainWindow.openDevTools();
  mainWindow.openDevTools({ detach: true });

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});