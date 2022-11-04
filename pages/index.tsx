import Head from 'next/head';
import React from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';

import Header from '../components/Header';
import Banner from '../components/Banner';
import PostLinksContainer from '../components/containers/PostLinksContainer';
import PostsServices from '../lib/http-services/posts-http-service';

const getPostsData = async () => await PostsServices.fetchAll();

export default function Home() {
    const { data, isLoading } = useQuery('posts', getPostsData);

    if (isLoading) return <Loading />;
    if (!data) return <div>No Data</div>;

    return (
        <div className='mx-auto max-w-7xl'>
            <Head>
                <title>Medium Clone</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <Banner />
            <PostLinksContainer posts={data} />
        </div>
    );
}

export const Loading = () => {
    return <p>Loading...</p>;
};

export const getStaticProps = async () => {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery('posts', getPostsData);

    return {
        props: { dehydrateState: dehydrate(queryClient) },
    };
};
