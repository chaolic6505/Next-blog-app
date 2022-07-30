import type { NextPage } from "next";
import { sanityClient } from '../sanity';

import Header from "../components/Header";
import Banner from "../components/Banner";
import Head from "next/head";

import { Post } from '../typing';

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      {/* <Posts posts={posts}/> */}
    </div>
  );
};

export async function getServerSideProps() {
  const query = `*[_type == "post"] {
  _id,
  title,
  author -> {
    name,
    image
  },
  description,
  mainImage,
  slug
}`;

  const posts = await sanityClient.fetch(query);

  return {
    props: { posts },
  };
}

