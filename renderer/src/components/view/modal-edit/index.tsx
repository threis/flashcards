import { FormEvent, useEffect, useState } from 'react'
import { Button } from '../../templates/button'
import { Input } from '../../templates/input'
import { RenderModal } from '../../templates/modal'
import { ICard } from '../../../types/card'
import { toast } from 'react-toastify'
import { FormEdit, Box, Text, GroupButton } from './styles'

interface ViewModalEditProps {
	card: ICard,
	openEditModal: boolean
	onRequestClose: () => void
}

export function ViewModalEdit({ card, openEditModal, onRequestClose }: ViewModalEditProps) {

	const [question, setQuestion] = useState('')
	const [answer, setAnswer] = useState('')

	useEffect(() => {

		if (openEditModal) {
			setQuestion(card.question)
			setAnswer(card.answer)
		}

	}, [openEditModal])

	function handleSaveEdit(event: FormEvent) {
		event.preventDefault()

		global.ipcRenderer.send('edit-flashcard', { id: card.id, question, answer })

		toast.success('Flashcard editado com sucesso')
		onRequestClose()
	}

	return (
		<RenderModal isOpen={openEditModal} onRequestClose={onRequestClose} >
			<FormEdit onSubmit={(event) => handleSaveEdit(event)}>
				<Box>
					<Text>Editar pergunta:</Text>
					<Input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} required />
				</Box>
				<Box>
					<Text>Editar resposta:</Text>
					<Input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} required />
				</Box>
				<GroupButton>
					<Button type="submit">Salvar</Button>
					<Button userStyle="gray" onClick={onRequestClose}>Voltar</Button>
				</GroupButton>
			</FormEdit>
		</RenderModal>
	)
}