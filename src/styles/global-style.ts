import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html {
    font-size: 14px;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #F7F8FA;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #738699;
    border-radius: 50px;
  }

  svg {
    flex-shrink: 0;
  }

  body {
    
  }

  html, body, #root {
    max-width: 100%;
    max-height: 100vh;
  } 
  
`;