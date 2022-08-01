import React from "react";
import { GetStaticProps } from "next";
import { urlFor } from "../../sanity";
import PortableText from "react-portable-text";

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
            {post.mainImage ? (
                <img
                    alt="post-image"
                    src={urlFor(post.mainImage).url()!}
                    className="w-full h-40 object-cover"
                />
            ) : (
                <img
                    alt="post"
                    src="/images/logo/medium-logo-black-rgb.svg"
                    className="h-60 w-1/2object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                />
            )}

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

                <div className="mt-10">
                    <PortableText
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                        content={post.body}
                        serializers={{
                            h1: (props: any) => (
                                <h1
                                    className="text-2xl font-bold my-5"
                                    {...props}
                                />
                            ),
                            h2: (props: any) => (
                                <h2
                                    className="text-xl font-bold my-5"
                                    {...props}
                                />
                            ),
                            li: ({ children }: any) => (
                                <li className="ml-4 list-disc"> {children}</li>
                            ),
                            link: ({ href, children }: any) => (
                                <a
                                    href={href}
                                    className="text-blue-500 hover:underline"
                                >
                                    {children}
                                </a>
                            ),
                        }}
                    />
                </div>
            </article>
            <hr className="max-w-lg my-5 mx-auto border border-slate-500" />
            <form className="flex flex-col p-5 max-w-2xl mx-auto mb-10">
                <h3 className="text-sm text-slate-600">
                    Enjoyed this article?
                </h3>
                <h4 className="text-3xl font-bold">Leave a comment below!</h4>
                <hr className="py-3 mt-2" />

                <label className="block mb-5">
                    <span className="text-gray-700">Name</span>
                    <input
                        className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-500 outline-none focus:ring"
                        type="text"
                    />
                </label>

                <label className="block mb-5">
                    <span className="text-gray-700">Email</span>
                    <input
                        className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-cyan-500 outline-none focus:ring "
                        type="email"
                    />
                </label>

                <label className="block mb-5">
                    <span className="text-gray-700">Comment</span>
                    <textarea
                        className="shadow border rounded py-3 px-3 form-textarea mt-1 block w-full ring-cyan-500 outline-none focus:ring"
                        rows={5}
                    />
                </label>
            </form>
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
