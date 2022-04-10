import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
  :root{
    --purple:#9980FA;
    --black: #2F3742;
    --gray: #a2a2a2;

    //Edit toast variables
    --toastify-color-success: var(--purple);
    --toastify-color-error: var(--black);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro';
    outline-color: var(--black);
  }

  button{
    cursor: pointer;
    border: none;
  }

  li{
      list-style-type: none;
  }

  //Modal style
  .react-modal-overlay{
      background: rgba(0,0,0,0.5);
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;

      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 998;
  }

  .react-modal-content{
      width: 100%;
      min-height: 400px;
      max-width: 680px;
      background: white;
      padding: 3rem;
      position: relative;
      border-radius: 0.25rem;
      z-index: 999;
  }

  .react-modal-close{
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
      border: 0;
      background: transparent;
      cursor: pointer;
      transition: all 0.2s;
      font-size: 1.5rem;
      font-weight: bold;
      padding: .2rem;
      outline-color: var(--black);
      
      &:hover{
        color: var(--purple);
        outline-color: var(--purple);
      }
  }
`

