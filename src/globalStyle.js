// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

  html{
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;

  }
  .comp {
    min-height: 100vh;
    min-width:400px;
    max-width:1200px;
    align-items: center;
    justify-content: center;
    overflow:hidden;


  }
`;
 
export default GlobalStyle;