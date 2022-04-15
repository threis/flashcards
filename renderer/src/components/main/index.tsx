import { Wrapper, Dashboard, ImageContainer, Text, Container, List, ListItem } from './styles'
import { BsCheckSquareFill } from 'react-icons/bs'

export function Main() {

	return (
		<Wrapper>
			<Dashboard>
				<Text>Bem-Vindo ao Flashcards!</Text>
				<ImageContainer>
					<img src="/static/flashcards.png" alt="Flashcards Illustration" width={200} height={200} />)
				</ImageContainer>
			</Dashboard>

			<Container>
				<List>
					<ListItem><BsCheckSquareFill />Primeiro passo, crie os seus flashcards!</ListItem>
					<ListItem><BsCheckSquareFill />Comece a revisá-los!</ListItem>
					<ListItem><BsCheckSquareFill />Bons estudos!</ListItem>
				</List>
			</Container>
		</Wrapper>
	)
}