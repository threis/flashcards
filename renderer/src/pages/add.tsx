import { Container } from '../components/container'
import { Menu } from '../components/templates/menu'
import { Add as Content } from '../components/add'
import { HeaderTitle } from '../components/header-title'

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