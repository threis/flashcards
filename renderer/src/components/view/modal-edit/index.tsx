import { RenderModal } from '../../templates/modal'
import { ICard } from '../../types/card'

interface ViewModalEditProps {
	card: ICard,
	openEditModal: boolean
	onRequestClose: () => void
}

export function ViewModalEdit({ card, openEditModal, onRequestClose }: ViewModalEditProps) {
	


	return (
		<RenderModal isOpen={openEditModal} onRequestClose={onRequestClose} >
			<div>teste</div>
		</RenderModal>
	)
}