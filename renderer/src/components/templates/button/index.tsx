import { ButtonHTMLAttributes, ReactNode } from 'react'

import { StyledButton } from './styles'

interface StyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	userStyle?: string
	children: ReactNode
}

export function Button({ children, userStyle = 'purple', ...rest }: StyledButtonProps) {
	return (
		<StyledButton userStyle={userStyle} {...rest}>
			{children}
		</StyledButton>
	)
}