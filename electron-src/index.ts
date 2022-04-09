import { join } from 'path'
import { format } from 'url'

import { BrowserWindow, app, ipcMain, IpcMainEvent } from 'electron'
import isDev from 'electron-is-dev'
import prepareNext from 'electron-next'
import { createDir, existDb, load, save } from './deck-service'

const userDataPath = app.getPath('userData')

app.on('ready', async () => {
	await prepareNext('./renderer')

	const mainWindow = new BrowserWindow({
		width: 1000,
		height: 800,
		show: false,
		// resizable: false,
		autoHideMenuBar: true,
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: false,
			preload: join(__dirname, 'preload.js'),
		},
	})
	mainWindow.maximize()
	mainWindow.show()

	const url = isDev
		? 'http://localhost:8000/'
		: format({
			pathname: join(__dirname, '../renderer/out/index.html'),
			protocol: 'file:',
			slashes: true,
		})

	mainWindow.loadURL(url)
})



app.on('window-all-closed', app.quit)

ipcMain.on('add-flashcard', (_, card: any) => {



	createDir(userDataPath)

	let data: string[] = []

	if (existDb(userDataPath)) {
		const fileLoaded = load(userDataPath)
		data = [...fileLoaded]
	}
	save(userDataPath, [...data, card])
})


ipcMain.on('view-flashcard', (event: IpcMainEvent) => {

	const data = load(userDataPath, true)
	event.sender.send('view-flashcard', data)
})