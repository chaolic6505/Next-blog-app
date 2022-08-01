import Head from "next/head";

import PostLinksContainer from "../components/containers/PostLinksContainer";
import { Post as _Post } from "../typing";
import PostsServices from "../lib/http-services/post-http-service";
import Header from "../components/Header";
import Banner from "../components/Banner";

interface HomeProps {
    posts: [_Post];
}

export default function Home({ posts }: HomeProps) {
    console.log(posts);
    return (
        <div className="mx-auto max-w-7xl">
            <Head>
                <title>Medium Clone</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Banner />
            <PostLinksContainer posts={posts} />
        </div>
    );
}

export const getServerSideProps = async () => {
    const posts = await PostsServices.fetchAll();

    return {
        props: { posts },
    };
};
