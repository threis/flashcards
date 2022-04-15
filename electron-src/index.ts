import { join } from 'path'
import { format } from 'url'

import { BrowserWindow, app, ipcMain, IpcMainEvent, nativeImage } from 'electron'
import isDev from 'electron-is-dev'
import prepareNext from 'electron-next'
import { createDir, existDb, load, save } from './deck-service'

const userDataPath = app.getPath('userData')
const icon = nativeImage.createFromPath(`${app.getAppPath()}/public/icon.ico`)

app.on('ready', async () => {
	await prepareNext('./renderer')

	if (app.dock) {
		app.dock.setIcon(icon)
	}

	const mainWindow = new BrowserWindow({
		icon,
		width: 1000,
		height: 800,
		show: false,
		resizable: false,
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: false,
			preload: join(__dirname, 'preload.js'),
		},
	})
	mainWindow.maximize()
	mainWindow.setMenuBarVisibility(false)
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

	const data = load(userDataPath)
	event.sender.send('view-flashcard', data)
})

ipcMain.on('edit-flashcard', (event: IpcMainEvent, updatedCard: any) => {

	const fullDeck = load(userDataPath)
	const updatedDeck = fullDeck.map((card: any) => {
		if (card.id === updatedCard.id) {
			return updatedCard
		} else {
			return card
		}
	})

	save(userDataPath, updatedDeck)
	event.sender.send('view-flashcard', updatedDeck)

})

ipcMain.on('delete-flashcard', (event: IpcMainEvent, deletedCard: any) => {

	const fullDeck = load(userDataPath)
	const updatedDeck = fullDeck.filter((card: any) => card.id !== deletedCard.id)

	save(userDataPath, updatedDeck)
	event.sender.send('view-flashcard', updatedDeck)

})