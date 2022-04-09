import { Container } from '../components/templates/container'
import { Menu } from '../components/templates/menu'
import { Start as Content } from '../components/Start'
import { HeaderTitle } from '../components/templates/header-title'

export default function Start() {
	return (
		<>
			<HeaderTitle  title="Iniciar"/>
			<Container>
				<Menu />
				<Content />
			</Container>
		</>
	)
}