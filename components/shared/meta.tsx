import Head from 'next/head'

type Props = {
  title: string
  description?: string
  keywords?: string
  image?: string
}

const Meta = ({ title, keywords, description, image }: Props): JSX.Element => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image ? image : '/logo512.png'} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image ? image : '/logo512.png'} />
      <meta name="twitter:card" content="summary_large_image" />
      <title>
        {title.includes('Bartolesi') ? title : title.concat(' | Emanuele Bartolesi')}
      </title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Emanuele Bartolesi - Microsoft 365 Architect',
  keywords: 'web development, blazor, csharp, microsoft, microsoft 365, microsoft azure',
  description: 'Microsoft 365 Architect. Lover of web and opensource.',
}

export default Meta
