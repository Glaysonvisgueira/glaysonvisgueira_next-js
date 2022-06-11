import GlobalStyle from '@/styles/globalStyle';

import LayoutTemplate from '@/components/LayoutTemplate'

function MyApp({ Component, pageProps }) {
  return  (
      <LayoutTemplate>
        <GlobalStyle />
        <Component {...pageProps} />
      </LayoutTemplate>
  )
}

export default MyApp;
