import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
 
 
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing:border-box;
  ; /* <- this can be added to each @font-face definition */
}

html, body, :root {
  font-family: 'Open Sans', sans-serif;    
    min-height: 100%;    
    scroll-behavior: smooth;
    overflow-x: hidden;
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
