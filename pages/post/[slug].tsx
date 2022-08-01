import React from "react";
import { GetStaticProps } from "next";
import { urlFor } from "../../sanity";

import Header from "../../components/Header";
import { Post } from "../../typing";

import PostsServices from "../../lib/http-services/post-http-service";

interface PostProps {
    post: Post;
}

function Post ({ post }: PostProps)  {
    console.log(post, "post");
    return (
        <main>
            <Header />
        </main>
    );
};

export const getStaticPaths = () => {
    return PostsServices.fetchPostPath();
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = await PostsServices.fetchPostProps({
        slug: params?.slug,
    });

    if (!post) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            post,
        },
    };
};

export default Post;
