import React from 'react'

const leftSide = () => {
  return (
    <div className="space-y-5 px-10">
      <h1 className="max-w-xl font-serif text-8xl">Stay curious.</h1>
      <h2 className="text-2xl">
        Discover stories, thinking, and expertise from writers on any topic.
      </h2>
      <h3 className="font-serif text-xl">
        <span className="underline decoration-black decoration-1">Medium</span>{' '}
        is a place to write, read and connect
      </h3>
      <h4>
        It&rsquo;s easy and free to post your thinking on any topic and connect
        with millions of readers.
      </h4>
    </div>
  )
}

const rideSide = () => {
  return (
    <img
      src="/images/logo/banner-logo-black.svg"
      className="hidden h-52 px-10 md:inline-flex"
    />
  )
}

export default function Banner() {
  return (
    <div className="flex items-center justify-between border-y border-black bg-yellow-400 py-10 lg:py-5">
      {leftSide()}
      {rideSide()}
    </div>
  )
}
