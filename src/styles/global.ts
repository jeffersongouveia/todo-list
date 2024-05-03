import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  &:focus {
    outline: 0;
  }
  
  body {
    background: ${(props) => props.theme.gray600};
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button {
    font: 400 0.875rem Inter, sans-serif;
  }
`
