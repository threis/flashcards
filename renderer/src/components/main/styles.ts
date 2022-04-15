import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
`

export const Dashboard = styled.div`
    width: 70%;
    height: 300px;
    margin: 10rem auto;
    position: relative;
    background-color: var(--purple);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    padding: 2rem;
`

export const ImageContainer = styled.div`
    position: absolute;
    bottom: -5rem;
    right: 10rem;
    background-color: var(--white);
    padding: 2rem;
    border-radius: 50%;
    box-shadow: .9rem -1rem 3rem -1.2rem var(--black);
`
export const Text = styled.h3`
    color: var(--white);
    font-size: 2.6rem;
    font-weight: 400;
    letter-spacing: 0.1rem;
`

export const Container = styled.div`
    width: 70%;
    margin: 10rem auto;
`

export const List = styled.ul`
    padding: 1rem;
`

export const ListItem = styled.li`
    padding: 1rem;
    font-size: 2rem;
    font-weight: bold;
    color: var(--black);
    display: flex;
    align-items: center;

    svg{
        margin-right: .5rem;
        font-size: 1.8rem;
    }
`