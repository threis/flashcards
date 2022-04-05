const { app, BrowserWindow, ipcMain } = require('electron')

let mainWindow
let addFlashcardsWindow
let startFlashcardsWindow

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
    show: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false
    }
  })
  addFlashcardsWindow.loadFile('src/addFlashCards.html')
  

  ipcMain.on('open-add-flashcards', () => {
    addFlashcardsWindow.show()
  })

  ipcMain.on('close-add-flashcards', () => {
    addFlashcardsWindow.hide()
  })

  startFlashcardsWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false
    }
  })
  startFlashcardsWindow.loadFile('src/startFlashCards.html')
  startFlashcardsWindow.webContents.openDevTools()
 
  ipcMain.on('open-start-flashcards', () => {
    startFlashcardsWindow.show()
  })

  ipcMain.on('close-start-flashcards', () => {
    startFlashcardsWindow.hide()
  })

}



app.whenReady().then(() => {
  createWindow()
})

