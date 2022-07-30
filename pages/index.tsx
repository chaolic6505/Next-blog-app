import type { NextPage } from 'next'
import Header from '../components/Header';
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  )
}

export default Home
