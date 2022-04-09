import Image from 'next/image'

import { Dashboard, ImageContainer } from './styles'

export function Main() {
	return (
		<>
			<Dashboard>
				<ImageContainer>
					<Image src="/assets/images/flashcards-illustration@200x200.PNG" alt="Flashcards Illustration" width="200" height="200" />
				</ImageContainer>
			</Dashboard>
		</>
	)
}