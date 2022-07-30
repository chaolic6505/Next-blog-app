import type { NextPage } from "next";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
    </div>
  );
};

export default Home;
