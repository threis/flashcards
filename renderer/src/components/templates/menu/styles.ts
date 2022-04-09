import styled from 'styled-components'


export const Sidebar = styled.div`
    width: 18.75rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export const Logo = styled.div`
    width: 100%;
    height: 18rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Text = styled.h1`
    font-size: 2rem;
    color: var(--purple);
    font-weight: 900;
    letter-spacing: .3rem;
`

export const Options = styled.ul`
    width: 100%;
    height: calc(100vh - 18rem) ;
`
interface MenuItemProps {
    activated: boolean;
}

export const MenuItem = styled.li<MenuItemProps>`
    width: 100%;
    padding: 1rem 0 1rem 3rem;
    font-weight: 800;
    font-size: 1.2rem;

    a{
        cursor: pointer;
        color: var(--black);
        text-decoration: none;
        display: flex;
        align-items: center;
        color: ${props => props.activated ? 'var(--purple)' : 'var(--black)'};
        
        &:hover{
            color: var(--purple);
        }

    }

    svg{
        padding: .3rem;
        font-size: 2rem;
        margin-right: .4rem;
    }
`