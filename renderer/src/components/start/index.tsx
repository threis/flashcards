import { useEffect, useState } from 'react'
import { VscDebugStart } from 'react-icons/vsc'
import { ICard } from '../../types/card'
import { Wrapper, Box, Title, Text, Button } from './styles'

export function Start() {
	const [deck, setDeck] = useState<ICard[]>([])

	useEffect(() => {
		global.ipcRenderer.addListener('view-flashcard', (_, data) => {
			setDeck(data)
		})
		global.ipcRenderer.send('view-flashcard')
	}, [])

	return render(deck)
}

interface IViewController {
	currentCard: ICard
	title: string
	phrase: string
	buttonText: string
	index: number
	isOnStartView: boolean
	toggleFront: boolean
}

function render(deck: ICard[]) {

	const [viewController, setViewController] = useState<IViewController>({
		title: '',
		phrase: 'Começar a revisar meus flashcards!',
		currentCard: {} as ICard,
		buttonText: 'Começar',
		isOnStartView: true,
		toggleFront: true,
		index: -1
	})

	function handleNextAction() {

		if (viewController.isOnStartView) {

			const currentCard = deck[0]

			setViewController({
				title: 'Pergunta:',
				phrase: currentCard.question,
				currentCard,
				buttonText: 'Revelar resposta',
				isOnStartView: false,
				toggleFront: true,
				index: 0
			})

			return
		}


		if (viewController.toggleFront) {

			setViewController(props => {
				return {
					title: 'Resposta:',
					phrase: props.currentCard.answer,
					currentCard: props.currentCard,
					buttonText: 'Próxima pergunta',
					isOnStartView: false,
					toggleFront: false,
					index: props.index
				}
			})


		} else {

			setViewController(props => {
				const hasNextCard = viewController.index + 1 < deck.length
				const nextIndex = props.index + 1
				const nextCard = deck[nextIndex]
				return {
					title: hasNextCard ? 'Pergunta:' : '',
					phrase: hasNextCard ? nextCard.question : 'Parabéns, você revisou todos os seus flashcards',
					currentCard: nextCard,
					buttonText: hasNextCard ? 'Revelar resposta' : 'Recomeçar',
					isOnStartView: !hasNextCard,
					toggleFront: true,
					index: hasNextCard ? nextIndex : props.index
				}
			})
		}
	}

	if (deck.length === 0) {
		return (
			<Wrapper>
				<Box>
					<Text>Você ainda não tem flashcards cadastrados!</Text>
				</Box>
			</Wrapper>
		)
	}

	const { title, phrase, buttonText } = viewController
	return (
		<Wrapper>
			<Box>
				<Title>{title}</Title>
				<Text>{phrase}</Text>
				<Button onClick={() => handleNextAction()}>
					{buttonText}
					<VscDebugStart />
				</Button>
			</Box>
		</Wrapper>
	)
}