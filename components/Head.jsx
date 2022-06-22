import Head from "next/head";

export default function HeadTag(props) {
	return (
		<Head>
			<title>{props.title}</title>
			<meta name="description" content={props.metaDescription} />
			<meta name="keywords" content={props.keywords} />
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
		</Head>
	);
}
