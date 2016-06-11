const { remote } = require('electron');
const { Menu, MenuItem } = remote;

console.log(Menu);

const menu = Menu.buildFromTemplate([
  {
    label: 'File',
    submenu: [
      {
        label: 'Preferences',
        click: (e) => {
          console.log(e);
        }
      }
    ]
  }
]);

Menu.setApplicationMenu(menu);
