import { Container } from '../components/container'
import { HeaderTitle } from '../components/header-title'
import { Menu } from '../components/templates/menu'
import { View as Content } from '../components/view'

export default function View() {
	return (
		<>
			<HeaderTitle  title="Visualizar"/>
			<Container>
				<Menu />
				<Content />
			</Container>
		</>
	)
}