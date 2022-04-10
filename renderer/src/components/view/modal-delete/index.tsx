import { FormEvent } from 'react'
import { toast } from 'react-toastify'
import { ICard } from '../../../types/card'
import { Button } from '../../templates/button'
import { RenderModal } from '../../templates/modal'
import { FormDelete, Box, Title, Text, GroupButton } from './styles'

interface ViewModalDeleteProps {
	card: ICard,
	openDeleteModal: boolean
	onRequestClose: () => void
}


export function ViewModalDelete({ card, openDeleteModal, onRequestClose }: ViewModalDeleteProps) {

	const { id, question, answer } = card

	function handleSaveDelete(event: FormEvent) {
		event.preventDefault()

		global.ipcRenderer.send('delete-flashcard', { id, question, answer })

		toast.success('Flashcard excluído com sucesso')
		onRequestClose()
	}

	return (
		<RenderModal isOpen={openDeleteModal} onRequestClose={onRequestClose} >
			<FormDelete onSubmit={(event) => handleSaveDelete(event)}>
				<Box>
					<Title>Pergunta:</Title>
					<Text>{question}</Text>
				</Box>
				<Box>
					<Title>Resposta:</Title>
					<Text>{answer}</Text>
				</Box>
				<GroupButton>
					<Button type="submit">Excluir</Button>
					<Button userStyle="gray" onClick={onRequestClose}>Voltar</Button>
				</GroupButton>
			</FormDelete>
		</RenderModal>
	)
}