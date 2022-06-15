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
    background: ${(props) => props.theme.colors.textColorTitle};
    color: ${(props) => props.theme.colors.background};
  }
       
  ::-webkit-scrollbar {
    width: 12px;
  }
  
  ::-webkit-scrollbar-track {
    background: #cfcfcf;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.backgroundSecondary}; 
    border: 1px solid #ffffff;
  }

  ::-webkit-scrollbar-thumb:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  
`;
export default GlobalStyle;
