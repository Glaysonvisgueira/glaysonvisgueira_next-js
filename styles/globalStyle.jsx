import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 

 * {
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing:border-box;
  }
  
  html, body, :root {
    font-family: "Quicksand", sans-serif;
    font-weight: 400;
    min-height: 100%;    
  }  
`;
export default GlobalStyle;
