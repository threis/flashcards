import React from 'react'
import { Menu } from '../components/menu'
import { Container } from '../components/container'
import { Main } from '../components/main'

export default function IndexPage() {
	return (
		<Container>
			<Menu />
			<Main />
		</Container>
	)
}

