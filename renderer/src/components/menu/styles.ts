import styled from 'styled-components'


export const Sidebar = styled.div`
    width: 18.75rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export const Logo = styled.div`
    width: 100%;
    height: 16rem;
    background-color: var(--purple);
`
export const Options = styled.ul`
    width: 100%;
    height: calc(100vh - 16rem) ;
`
export const MenuItem = styled.li`
    width: 100%;
    padding: 1rem 0 1rem 3rem;
    font-weight: 800;
    color: var(--black);
    font-size: 1.2rem;

    a{
        cursor: pointer;
        color: var(--black);
        text-decoration: none;
        display: flex;
        align-items: center;
        
        &:visited{
            color: var(--black);
        }

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