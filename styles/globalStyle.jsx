import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600;700&display=swap');
 * {
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing:border-box;
  font-family: "Quicksand", sans-serif;
  }

  html, body, :root {
    min-height: 100%;
  }
`;
export default GlobalStyle;
