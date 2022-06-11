import styled from "styled-components";

const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #171E26;
`

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 64px;
    background-color: #171E26;    
`;

export default function LayoutTemplate({children}) {
  return (
      <Main>
        {children}
      </Main>
  )
}
