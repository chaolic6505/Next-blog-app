import React, { MouseEventHandler } from 'react'
import { FaGoogle, FaFacebook } from 'react-icons/fa';

type Button = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  color: string,
  title: string,
};


export default function OAuthButton({ onClick, color, title  } : Button) {
  console.log(color)
  if (!color) return <p>Loading...</p>;

  return (
    <button
      type="button"
      className={`px-8 text-white bg-[${color}] hover:bg-[${color}]/90 focus:ring-4 focus:outline-none focus:ring-[${color}]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2`}>
        {
          title === 'Google' ?
          <FaGoogle className="mr-3"/> :
          <FaFacebook className="mr-3"/>
        }
        {title}
      </button>
  )
}

