import Head from 'next/head'

export default function HeadTag(props) {
  return (
    
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={props.metaDescription} />
        <meta name="keywords" content={props.keywords}/>
      </Head>
     
  )
}
