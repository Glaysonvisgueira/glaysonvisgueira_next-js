import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;0,800;1,800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap');
* {
  margin: 0;
   padding: 0;
   outline: 0;
   box-sizing:border-box;
  }
  
  html, body, :root {
    font-family: 'Rubik Mono One', sans-serif;
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

//font-family: "Quicksand", sans-serif;
//font-family: 'Open Sans', sans-serif;
//font-family: 'Rubik Mono One', sans-serif;
//font-family: 'Roboto', sans-serif;
