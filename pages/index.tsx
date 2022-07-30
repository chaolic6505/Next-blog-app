import Link from "next/link";
import Head from "next/head";
import { sanityClient, urlFor } from "../sanity";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Posts from "../components/Posts";

import { Post as _Post } from "../typing";

interface Props {
  posts: [_Post];
}

const fetchPostsData = async () => {
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

  let results = await sanityClient.fetch(query);
  return results;
};

export default function Home({ posts }: Props) {
  console.log(posts);
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <Posts posts={posts} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const posts = await fetchPostsData();

  return {
    props: { posts },
  };
};
