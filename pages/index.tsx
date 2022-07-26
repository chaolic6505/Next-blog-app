import type { NextPage } from 'next'
import { signIn, signOut } from 'next-auth/react'
import Head from 'next/head'

import OAuthButton from '../components/Buttons/OAuth'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>


          <OAuthButton
            onClick={() => signIn('google')}
            color="#5a03d5"
            title="Google"
            type="google"
          />

      </main>

    </div>
  )
}

export default Home
