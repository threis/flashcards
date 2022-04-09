import { MdClear } from 'react-icons/md'
import { HiOutlinePencil } from 'react-icons/hi'
import { Button } from '../templates/button'
import { Input } from '../templates/input'
import { FormContainer, Box, Text, InsideButton } from './styles'
import { FormEvent, useEffect } from 'react'
import { useState } from 'react'
import { Deck } from '../types/deck'

export function Add() {

	const [question, setQuestion] = useState('')
	const [answer, setAnswer] = useState('')

	useEffect(() => {
		global.ipcRenderer.addListener('add-flashcard', () => console.log('send add-flashcard'))
	}, [])


	function handleFormAdd(event: FormEvent) {
		event.preventDefault()

		global.ipcRenderer.send('add-flashcard', { question, answer })
		handleClearForm()

	}

	function handleClearForm() {
		setQuestion('')
		setAnswer('')
	}

	return (
		<FormContainer onSubmit={(event) => handleFormAdd(event)}>
			<Box>
				<Text>Digite uma pergunta</Text>
				<Input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} required />
			</Box>
			<Box>
				<Text>Digite uma resposta</Text>
				<Input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} required />
			</Box>
			<Box>
				<Button type="submit">
					<InsideButton>
						<HiOutlinePencil />
						<span>Incluir</span>
					</InsideButton>
				</Button>
				<Button userStyle='gray' onClick={() => handleClearForm()}>
					<InsideButton>
						<MdClear />
						<span>Cancelar</span>
					</InsideButton>
				</Button>
			</Box>
		</FormContainer>
	)
}