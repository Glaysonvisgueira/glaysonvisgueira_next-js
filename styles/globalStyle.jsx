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

  ::selection {
    background: ${(props) => props.theme.colors.branding};
    color: ${(props) => props.theme.colors.background};
  }
       
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #a8a8a8;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.branding}; 
    border: 1px solid #ffffff;
  }

  ::-webkit-scrollbar-thumb:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  
`;
export default GlobalStyle;
