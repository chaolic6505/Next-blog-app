import React, { MouseEventHandler } from 'react'
import { FaGoogle, FaFacebook } from 'react-icons/fa'
import { SignInResponse } from 'next-auth/react'

type Button = {
  onClick: () => Promise<SignInResponse | undefined>
  color: string
  title: string
  type: string
}

export default function OAuthButton({ color, title, type, onClick }: Button) {
  return (
    <div className="mt-3">
      <button
        onClick={onClick}
        type="button"
        className={`flex items-center text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-8 py-5 text-center mr-2 mb-2`}
      >
        {type === 'google' ? (
          <FaGoogle className="mr-2" />
        ) : (
          <FaFacebook className="mr-2" />
        )}
        Sing In
      </button>
    </div>
  )
}
