import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

// import Document, { Html, Head, Main, NextScript } from 'next/document';
// import Script from 'next/script';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: [initialProps.styles, sheet.getStyleElement()],
			};
		} finally {
			sheet.seal();
		}
	}

	// render() {
	// 	return (
	// 	  <Html>
	// 		<Head>
	// 		  <title>My page</title>
	// 		  <script
	// 			async
	// 			src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
	// 		  ></script>

	// 		  <script>
	// 			var googletag = googletag || { };
	// 			googletag.cmd = googletag.cmd || [];
	// 		  </script>
	// 		</Head>
	// 		<body>
	// 		  <Main />
	// 		  <NextScript />
	// 		</body>
	// 	  </ Html>
	// 	);
	//   }
}
