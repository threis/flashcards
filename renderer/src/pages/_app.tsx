import React from 'react'
import type { AppProps } from 'next/app'
import Modal from 'react-modal'

import { GlobalStyle } from '../globalStyles'

Modal.setAppElement('#__next')

export default function App({ Component, pageProps }: AppProps) {

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const MyComponent = Component as any

	return (
		<>
			<GlobalStyle />
			<MyComponent {...pageProps} />
		</>
	)
}