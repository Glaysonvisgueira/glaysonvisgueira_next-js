import Head from '@/components/Head'
import styled from "styled-components";


const MainPage = styled.div`
   width: 100%;
   height: 100vh;
   background: #171E26;
`;

export default function HomePage(props) {
  return (
    <>
      <Head title="Homepage" metaDescription="" keywords=""/>
      <MainPage></MainPage>
    </>
  )
}
