import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Post as _Post } from "../typing";
import { urlFor } from "../sanity";

interface Props {
    post: _Post;
}

export default function Post({ post }: Props) {
    console.log(post, "post");
    return (
        <div className="bg-slate-50">
            <Link key={post._id} href={`/post/${post.slug.current}`} className="bg-slate-50">
                <div className="group cursor-pointer overflow-hidden rounded-lg">
                    {post.mainImage ? (
                        <img
                            alt="post"
                            src={urlFor(post.mainImage).url()}
                            className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                        />
                    ) : (
                        <img
                            alt="post"
                            src="/images/logo/medium-logo-black-rgb.svg"
                            className="h-60 w-1/2object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                        />
                    )}

                    <div className="flex justify-between bg-slate-50 p-5">
                        <div>
                            <p className="text-lg font-bold">{post.title}</p>
                            <p>
                                {post.description} by {post.author.name}
                            </p>
                        </div>
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
                    </div>
                </div>
            </Link>
        </div>
    );
}
