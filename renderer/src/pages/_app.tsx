import React from 'react'
import type { AppProps } from 'next/app'
import Modal from 'react-modal'
Modal.setAppElement('#__next')


import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { GlobalStyle } from '../globalStyles'


export default function App({ Component, pageProps }: AppProps) {

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const MyComponent = Component as any

	return (
		<>
			<GlobalStyle />
			<ToastContainer autoClose={3000}/>
			<MyComponent {...pageProps} />
		</>
	)
}