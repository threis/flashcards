import { useState } from 'react'
import { useEffect } from 'react'
import { ICard } from '../types/card'
import { AiFillDelete } from 'react-icons/ai'
import { RiPencilFill } from 'react-icons/ri'
import { Wrapper, Card, CardFront, CardBack, GroupButton, Button } from './styles'
import { ViewModalEdit } from './modal-edit'
import { ViewModalDelete } from './modal-delete'

export function View() {

	const [deck, setDeck] = useState<ICard[]>([])

	useEffect(() => {
		global.ipcRenderer.addListener('view-flashcard', (_, data) => {
			setDeck(JSON.parse(data))
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

	function handleEditCard() {
		setToggleEditModal(true)
		console.log()
	}

	function handleDeleteCard() {
		console.log()
	}

	return (
		<Wrapper>
			{
				deck.map(card => {
					return (
						<Card key={card.id}>
							<GroupButton>
								<Button onClick={() => handleEditCard()}>
									<RiPencilFill />
								</Button>
								<Button>
									<AiFillDelete onClick={() => handleDeleteCard()} />
								</Button>
							</GroupButton>
							<CardFront>
								<h3>Pergunta:</h3>
								<p>{card.question}</p>
							</CardFront>
							<CardBack>
								<h3>Resposta:</h3>
								<p>{card.answer}</p>
							</CardBack>
						</Card>
					)
				})
			}
			<ViewModalEdit card={cardSelected} openEditModal={toggleEditModal} onRequestClose={() => setToggleEditModal(false)} />
			<ViewModalDelete />
		</Wrapper>
	)

}