import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`
export const Box = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Title = styled.p`
    display: inline-block;
    width: 100%;
    font-weight: bold;
    font-size: 1.2rem;
 `

export const Text = styled.p`
    font-size: 4rem;
    text-align: center;
    display: inline-block;
    margin-bottom: 3rem;
    color: var(--black);
    font-weight: 300;
`

export const Button = styled.button`
    background-color: var(--purple);
    color: white;
    padding: 1rem 3rem;
    font-size: 2rem;
    border-radius: .125rem;
    transition: filter .5s;
    display: flex;
    align-items: center;

    &:hover{
        filter: brightness(1.2);
    }

    svg {
        margin-left: .4rem;
    }
    
`
