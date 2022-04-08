import { Container } from '../components/container'
import { Menu } from '../components/menu'
import { Start as Content } from '../components/Start'

export default function Start() {
	return (
		<Container>
			<Menu />
			<Content />
		</Container>
	)
}