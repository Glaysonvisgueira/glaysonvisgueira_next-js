import "../styles/font.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import GlobalStyle from "../styles/globalStyle";
import LayoutTemplate from "../components/LayoutTemplate";

import SettingsContext from "@/context/SettingsContext";

function MyApp({ Component, pageProps }) {
	return (
		<SettingsContext>
			<Analytics />
			<Script src="https://cdn.splitbee.io/sb.js" />
			<Script async defer src="https://analytics.umami.is/script.js" data-website-id="dfbb47c9-f3d1-415b-9405-e61bdee1c171" />
			<GlobalStyle />
			<LayoutTemplate>
				<Component {...pageProps} />
			</LayoutTemplate>
		</SettingsContext>
	);
}

export default MyApp;
