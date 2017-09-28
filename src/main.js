const electron = require('electron');
const app = electron.app;
const BrowserWindow =  electron.BrowserWindow;
const Menu = electron.Menu;
const name = electron.app.getName();
app.on('ready', _ => {
    new BrowserWindow();
    const template = [
        {
            label:name,
            submenu: [{
                label: `About ${name}`,
                click: _ => {
                    console.log("clicked");
                },
                role: 'about'
            }, {
                type: 'separator'
            }, {
                label: "Quit",
                click: _ => { console.log("works") },
                accelerator: 'CommandOrControl+Q'
            }]
        }
    ]
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
});