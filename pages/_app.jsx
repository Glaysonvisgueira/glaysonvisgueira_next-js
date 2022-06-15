import GlobalStyle from "../styles/globalStyle";
import LayoutTemplate from "../components/LayoutTemplate";

import SettingsContext from "@/context/SettingsContext";

function MyApp({ Component, pageProps }) {
	return (
		<SettingsContext>
			<GlobalStyle />
			<LayoutTemplate>
				<Component {...pageProps} />
			</LayoutTemplate>
		</SettingsContext>
	);
}

export default MyApp;
