import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className='bg-gray-100 '>
      <Head>
        <title>Amazonc Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <main className='max-w-screen-xl mx-auto'>
        <Banner/>
      </main>

    </div>
  )
}
