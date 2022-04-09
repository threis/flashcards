import styled from 'styled-components'

export const Wrapper = styled.div`
     display: flex;
     flex-direction: row;
     align-self: flex-start;
     flex-wrap: wrap;
     max-width: 70%;
     margin: 10rem auto;
`

export const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    margin: 1rem;
    width: 24rem;
    background-color: var(--purple);
    color: white;
    border-radius: .265rem;

    h3{
        font-weight: 300;
        font-size: .8rem;
    }

    p {
        font-weight: 500;
        font-size: 1.2rem;
    }
`
export const CardFront = styled.div`
    margin: 1.4rem 0;
`
export const CardBack = styled.div`
    border-top: .1rem solid white;
    padding: 1rem 0 0 0;
    margin: .4rem 0;
`

export const GroupButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`
export const Button = styled.button`
    background-color: transparent;
    color: white;
    padding: .6rem;

    svg{
        font-size: 1.6rem;
        transition: filter all .5s;

        &:hover{
            filter: opacity(.8);
        }
    }
`