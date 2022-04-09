import React from 'react'
import { Menu } from '../components/templates/menu'
import { Container } from '../components/templates/container'
import { Main } from '../components/main'
import { HeaderTitle } from '../components/templates/header-title'

export default function IndexPage() {
	return (
		<>
			<HeaderTitle title="Home Page"/>
			<Container>
				<Menu />
				<Main />
			</Container>
		</>
	)
}

