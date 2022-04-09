import Modal from 'react-modal'

import { AiOutlineClose } from 'react-icons/ai'
import { Container } from './styles'
import { ReactNode } from 'react'

interface ModalProps {
    isOpen: boolean
    onRequestClose: () => void
    children: ReactNode
}

export function RenderModal({ isOpen, onRequestClose, children }: ModalProps) {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>
			<Container>
				{children}
			</Container>
			<button
				type="button"
				onClick={onRequestClose}
				className="react-modal-close"
			>
				<AiOutlineClose />
			</button>
		</Modal>
	)
}
