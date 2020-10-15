import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #FFF;
    background: #EBF2F5;
  }

  body, button, input, textarea {
    font: 600 18px Nunito, sans-serif;
  }
`;
