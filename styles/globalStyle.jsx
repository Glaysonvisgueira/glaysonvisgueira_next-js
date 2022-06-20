import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap');
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
    scroll-behavior: smooth;
  }  

  ::selection {
    background: ${(props) => props.theme.colors.branding};
    color: ${(props) => props.theme.colors.background};
  }
       
  ::-webkit-scrollbar {
    width: 4px;
  }
  
  ::-webkit-scrollbar-track {
    background: #a8a8a8;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${(props) => props.theme.colors.branding}; 
    //border: 1px solid #ffffff;
  }

  ::-webkit-scrollbar-thumb:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  
`;
export default GlobalStyle;
