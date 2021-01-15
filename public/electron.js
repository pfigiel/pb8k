const electron = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function getFileUrl(fileName) {
    return `file://${path.join(__dirname, `../build/${fileName}`)}`;
}

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 680,
        resizable: false,
        icon: getFileUrl("favicon.ico"),
    });
    mainWindow.setMenu(null);
    mainWindow.loadURL(isDev ? "http://localhost:3000" : getFileUrl("index.html"));
    mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});
