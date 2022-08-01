import React from "react";
import { GetStaticProps } from "next";
import { urlFor } from "../../sanity";

import Header from "../../components/Header";
import { Post } from "../../typing";

import PostsServices from "../../lib/http-services/post-http-service";

interface PostProps {
    post: Post;
}

function Post({ post }: PostProps) {
    console.log(post, "post");
    return (
        <main>
            <Header />
            <img
                alt="post-image"
                src={urlFor(post.mainImage).url()!}
                className="w-full h-40 object-cover"
            />
            <article className="max-w-3xl mx-auto p-5">
                <h1 className="text-3xl mt-10 mb-3">{post.title}</h1>
                <h2 className="text-xl font-light text-gray-500 mb-2">
                    {post.description}
                </h2>

                <div className="flex items-center space-x-2">
                    {post.author.image ? (
                        <img
                            alt="author"
                            className="h-12 w-12 rounded-full"
                            src={urlFor(post.author.image).url()!}
                        />
                    ) : (
                        <img
                            alt="post"
                            src="/images/defaults/robot.jpeg"
                            className="h-12 w-12 rounded-full"
                        />
                    )}

                    <p className="font-extralight text-sm">
                        <span className="text-green-600">
                            Article post by {post.author.name}{" "}
                        </span>{" "}
                        - Published at{" "}
                        {new Date(post._createdAt).toLocaleString()}
                    </p>
                </div>
            </article>
        </main>
    );
}

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
        revalidate: 60,
    };
};

export default Post;
