import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  //css reset
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ${normalize}

  body {
    font-family: ${({ theme }) => theme.fontFamily};
    background-color: ${({ theme }) => theme.colors.background.main.color};
  }

  html, body {
      display: flex;
      min-height: 100vh;
      width: 100%;
  }
  #__next {
      flex: 1;
      display: flex;
      flex-direction: column;
  }
`;

export default GlobalStyle;
