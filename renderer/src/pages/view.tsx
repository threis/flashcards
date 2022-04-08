import { Container } from '../components/container'
import { Menu } from '../components/menu'
import { View as Content } from '../components/view'

export default function View() {
	return (
		<Container>
			<Menu />
			<Content />
		</Container>
	)
}