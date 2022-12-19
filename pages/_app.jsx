import "../styles/font.css";
import Script from "next/script";
import GlobalStyle from "../styles/globalStyle";
import LayoutTemplate from "../components/LayoutTemplate";

import SettingsContext from "@/context/SettingsContext";

function MyApp({ Component, pageProps }) {
	return (
		<SettingsContext>
			<Script src="https://cdn.splitbee.io/sb.js" />
			<GlobalStyle />
			<LayoutTemplate>
				<Component {...pageProps} />
			</LayoutTemplate>
		</SettingsContext>
	);
}

export default MyApp;
