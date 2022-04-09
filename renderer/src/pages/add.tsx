import { Container } from '../components/templates/container'
import { Menu } from '../components/templates/menu'
import { Add as Content } from '../components/add'
import { HeaderTitle } from '../components/templates/header-title'

export default function Add() {
	return (
		<>
			<HeaderTitle  title="Adicionar Flashcard"/>
			<Container>
				<Menu />
				<Content />
			</Container>
		</>
	)
}