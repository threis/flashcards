import styled from 'styled-components'

interface StyledButtonProps {
    userStyle?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
    margin: .2rem;
    padding: 0.6rem 1rem;
    font-size: 1.4rem;
    color: var(--white);
    background-color: ${props => `var(--${props.userStyle})`};
    border-radius: .125rem;
    transition: filter .5s;

    &:hover{
        filter: brightness(1.2);
    }

` 