import { createGlobalStyle } from "styled-components";

import type { Theme } from "./theme";

export const GlobalStyle = createGlobalStyle<{ theme?: Theme }>`

  html {
    font-size: 14px;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
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
    width: 100%;
    height: 100vh;
    max-width: 100%;
    max-height: 100vh;
  } 
  
  h1, h2, h3, h4,
  h5, h6, p, span {
    line-height: 15px;
  }  

`;