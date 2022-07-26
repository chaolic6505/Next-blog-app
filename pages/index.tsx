import type { NextPage } from 'next'
import Head from 'next/head'

import OAuthButton from '../components/Buttons/OAuth'

const signIn = async () => {
  console.log('press')

};

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold mb-5">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            T3 Start Kit
          </a>
        </h1>
        <div>
          <OAuthButton
            color="#4285F4"
            title="Google"
            onClick={signIn}
          />
          <OAuthButton
            color="#3b5998"
            title="Facebook"
            onClick={signIn}
          />
        </div>
      </main>

    </div>
  )
}

export default Home
