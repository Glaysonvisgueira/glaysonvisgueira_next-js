import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
  
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing:border-box;
}

html, body, :root {
    font-family: 'Lato', sans-serif;
    min-height: 100%;    
    scroll-behavior: smooth;
    overflow-x: hidden;
  }  

  ::selection {
    background: ${(props) => props.theme.colors.branding};
    color: ${(props) => props.theme.colors.background};
  }
       
  ::-webkit-scrollbar {
    width: 8px;   
  }
  
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.backgroundSecondary};
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: ${(props) => props.theme.colors.branding}; 
  }
  
`;
export default GlobalStyle;
