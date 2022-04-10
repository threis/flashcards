import styled from 'styled-components'

export const FormContainer = styled.form`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`

export const Box = styled.div`
    width: 30rem;
    height: 5rem;
    margin: .4rem;
`

export const Text = styled.p`
    font-weight: 700;
    color: var(--black);
`

export const InsideButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    svg{
        margin-right: .2rem;
    }
`