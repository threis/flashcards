import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
  :root{
    --purple:#9980FA;
    --black: #2F3742;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro';
  }

  button{
    cursor: pointer;
  }

  li{
      list-style-type: none;
  }
`
