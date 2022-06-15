import Head from "next/head";

export default function HeadTag(props) {
	return (
		<Head>
			<title>{props.title}</title>
			<link rel="icon" href="/favicon.ico" />
			<meta name="description" content={props.metaDescription} />
			<meta name="keywords" content={props.keywords} />
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
			<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600;700&display=swap" rel="stylesheet" />
		</Head>
	);
}
