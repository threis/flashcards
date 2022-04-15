import { useState } from 'react'
import { useEffect } from 'react'
import { ICard } from '../../types/card'
import { AiFillDelete } from 'react-icons/ai'
import { RiPencilFill } from 'react-icons/ri'
import { Wrapper, Card, CardFront, CardBack, GroupButton, Button, Text, Box } from './styles'
import { ViewModalEdit } from './modal-edit'
import { ViewModalDelete } from './modal-delete'

export function View() {

	const [deck, setDeck] = useState<ICard[]>([])

	useEffect(() => {
		global.ipcRenderer.addListener('view-flashcard', (_, data) => {
			setDeck(data)
		})
		global.ipcRenderer.send('view-flashcard')
	}, [])

	return render(deck)
}


function render(deck: ICard[]) {

	const [cardSelected, setCardSelected] = useState<ICard>({} as ICard)
	const [toggleEditModal, setToggleEditModal] = useState(false)
	const [toggleDeleteModal, setToggleDeleteModal] = useState(false)

	if (!deck || deck.length === 0) {
		return <Box><Text>Você ainda não tem flashcards cadastrados!</Text></Box>
	}

	function handleEditCard(card: ICard) {
		setCardSelected(card)
		setToggleEditModal(true)
	}

	function handleCloseEditModal() {
		setToggleEditModal(false)
	}

	function handleDeleteCard(card: ICard) {
		setCardSelected(card)
		setToggleDeleteModal(true)
	}

	function handleCloseDeleteModal() {
		setToggleDeleteModal(false)
	}

	return (
		<Wrapper>
			{
				deck.map(card => {
					const { id, question, answer } = card
					return (
						<Card key={id}>
							<GroupButton>
								<Button onClick={() => handleEditCard(card)}>
									<RiPencilFill />
								</Button>
								<Button>
									<AiFillDelete onClick={() => handleDeleteCard(card)} />
								</Button>
							</GroupButton>
							<CardFront>
								<h3>Pergunta:</h3>
								<p>{question}</p>
							</CardFront>
							<CardBack>
								<h3>Resposta:</h3>
								<p>{answer}</p>
							</CardBack>
						</Card>
					)
				})
			}
			<ViewModalEdit card={cardSelected} openEditModal={toggleEditModal} onRequestClose={handleCloseEditModal} />
			<ViewModalDelete card={cardSelected} openDeleteModal={toggleDeleteModal} onRequestClose={handleCloseDeleteModal} />
		</Wrapper>
	)

}