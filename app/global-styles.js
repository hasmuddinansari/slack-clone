import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
  }


  body {
    overflow:hidden;
  }

  .flex-center {
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .self-justify-end {
    justify-self:end;
  }

  .flex-end-center {
    display:flex;
    justify-content:flex-end;
    align-items:center;
  }

  .flex-start-center {
    display:flex;
    justify-content:flex-start;
    align-items:center;
  }

`;

export default GlobalStyle;
