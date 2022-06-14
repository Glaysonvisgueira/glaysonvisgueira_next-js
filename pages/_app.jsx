import GlobalStyle from "../styles/globalStyle";
import LayoutTemplate from "../components/LayoutTemplate";
import { ThemeProvider } from "styled-components";

import { blueTheme, whiteTheme, yellowTheme } from "@/styles/Theme";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={whiteTheme}>
				<LayoutTemplate>
					<Component {...pageProps} />
				</LayoutTemplate>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
