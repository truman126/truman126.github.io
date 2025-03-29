// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

 

  html{
    scroll-behavior: smooth;
  }
  body {
    max-width:1920px;
    min-width:1024px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    
    @media (max-width: 1023px) {
      display:Default;
    }

  }
  .comp {
    margin-bottom:150px;
    min-height: 60vh;
    max-width:1200px;
    align-items: center;
    justify-content: center;
    overflow:hidden;
  }
  HashLink {
    color:green;
  }
`;
 
export default GlobalStyle;