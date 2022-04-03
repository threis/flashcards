const { app, BrowserWindow, ipcMain } = require('electron')

let mainWindow
let addFlashcardsWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false
    }
  })
  mainWindow.loadFile('src/index.html')
  mainWindow.webContents.openDevTools()

  addFlashcardsWindow = new BrowserWindow({
    width: 400,
    height: 400,
    show: false
  })
  addFlashcardsWindow.loadFile('src/addFlashCards.html')


  ipcMain.on('open-add-flashcards', () => {
    addFlashcardsWindow.show()
  })

  ipcMain.on('close-add-flashcards', () => {
    addFlashcardsWindow.hide()
  })

}

app.whenReady().then(() => {
  createWindow()
})

