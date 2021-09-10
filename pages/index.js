import Head from 'next/head'

import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { Content } from 'components/Content'

export default function Home() {
  return (
    <>
      <main>
        <Head>
          <title>DocRed | Article</title>
          <meta name='description' content='A medical article' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <Header />
        <Content />
        <Footer />
      </main>
    </>
  )
}
