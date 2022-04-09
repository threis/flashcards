import React from 'react'
import { Menu } from '../components/templates/menu'
import { Container } from '../components/container'
import { Main } from '../components/main'
import { HeaderTitle } from '../components/header-title'

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

