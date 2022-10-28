import Head from "next/head";
import { useTheme } from "styled-components";

export default function HeadTag(props) {
	const theme = useTheme();
	return (
		<Head>
			<title>GV | {props.title}</title>
			<script async src="https://cdn.splitbee.io/sb.js"></script>
			<meta name="theme-color" content={theme.colors.branding} /> {/* <!-- Chrome, Firefox OS and Opera -->*/}
			<meta name="msapplication-navbutton-color" content={theme.colors.branding} /> {/* <!-- Windows Phone -->*/}
			<meta name="apple-mobile-web-app-status-bar-style" content={theme.colors.branding} /> {/*<!-- iOS Safari -->*/}
			<meta name="description" content={props.metaDescription} />
			<meta name="keywords" content={props.keywords} />
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
		</Head>
	);
}
