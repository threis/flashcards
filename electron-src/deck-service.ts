import fs from 'fs'
import path from 'path'

const DB_FILE_NAME = 'deck_db.json'

export function save(userDataPath: string, data: any) {

	const dirDatabase = path.resolve(userDataPath, 'database')
	fs.writeFile(`${dirDatabase}\\${DB_FILE_NAME}`, JSON.stringify(data), null, (err) => err ?? console.log(`method_save_err: ${err}`))
}

export function load(userDataPath: string, returnAsString = false) {

	const dirDatabase = path.resolve(userDataPath, 'database')

	const data = fs.readFileSync(`${dirDatabase}\\${DB_FILE_NAME}`, 'utf8')
	const file = data.toString()
	return returnAsString ? file : JSON.parse(file)

}

export function createDir(userDataPath: string) {

	const dirDatabase = path.resolve(userDataPath, 'database')

	if (!fs.existsSync(dirDatabase)) {
		fs.mkdirSync(dirDatabase)
	}

}

export function existDb(userDataPath: string): boolean {

	const dirDatabase = path.resolve(userDataPath, 'database')

	if (fs.existsSync(`${dirDatabase}\\${DB_FILE_NAME}`)) {
		return true
	}
	return false

}