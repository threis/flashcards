import { useState } from 'react'
import { useEffect } from 'react'
import { Deck } from '../types/deck'
import { AiFillDelete } from 'react-icons/ai'
import { RiPencilFill } from 'react-icons/ri'
import { Wrapper, Card, CardFront, CardBack, GroupButton, Button } from './styles'

export function View() {

	const [deck, setDeck] = useState<Deck[]>([])

	useEffect(() => {
		global.ipcRenderer.addListener('view-flashcard', (_, data) => {
			setDeck(JSON.parse(data))
		})
		global.ipcRenderer.send('view-flashcard')
	}, [])

	return render(deck)
}


function render(deck: Deck[]) {

	if (!deck || deck.length === 0) {
		return <h1>Carregando...</h1>
	}

	return (
		<Wrapper>
			{
				deck.map(card => {
					return (
						<Card key={card.question}>
							<GroupButton>
								<Button>
									<RiPencilFill />
								</Button>
								<Button>
									<AiFillDelete />
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
		</Wrapper>
	)

}