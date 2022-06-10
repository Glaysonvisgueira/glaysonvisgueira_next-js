import GlobalStyle from '@/styles/globalStyle';

function MyApp({ Component, pageProps }) {
  return  <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>}

export default MyApp
