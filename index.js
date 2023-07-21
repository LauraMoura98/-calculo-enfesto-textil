const {app, BrowserWindow} = require('electron');


let mainWindow;


app.on('ready', () =>{


    mainWindow = new BrowserWindow({
        width: 500,
        height: 380,
        resizable: false
    });


    mainWindow.loadURL(`file://${__dirname}/index.html`)
});


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();


});
