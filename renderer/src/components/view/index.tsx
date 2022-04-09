import { useState } from 'react'
import { useEffect } from 'react'
import { ICard } from '../../types/card'
import { AiFillDelete } from 'react-icons/ai'
import { RiPencilFill } from 'react-icons/ri'
import { Wrapper, Card, CardFront, CardBack, GroupButton, Button } from './styles'
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

	if (!deck || deck.length === 0) {
		return <h1>Carregando...</h1>
	}

	function handleEditCard(card: ICard) {
		setCardSelected(card)
		setToggleEditModal(true)
	}

	function handleDeleteCard() {
		console.log()
	}

	function handleCloseModal() {
		setToggleEditModal(false)
		global.ipcRenderer.send('view-flashcard')
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
									<AiFillDelete onClick={() => handleDeleteCard()} />
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
			<ViewModalEdit card={cardSelected} openEditModal={toggleEditModal} onRequestClose={handleCloseModal} />
			<ViewModalDelete />
		</Wrapper>
	)

}