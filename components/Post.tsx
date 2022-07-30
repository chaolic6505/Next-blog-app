import React from 'react'
import Link from 'next/link';

import { Post as _Post } from '../typing';
import { urlFor } from '../sanity';

interface Props {
    post: _Post;
}

export default function Post({ post } : Props) {
    return (
        <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="group cursor-pointer overflow-hidden rounded-lg border">
                <img
                    alt="post-image"
                    src={urlFor(post.mainImage).url()!}
                    className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                />
                <div className="flex justify-between bg-white p-5">
                    <div>
                        <p className="text-lg font-bold">{post.title}</p>
                        <p>
                            {post.description} by {post.author.name}
                        </p>
                    </div>
                    <img
                        alt="author"
                        className="h-12 w-12 rounded-full"
                        src={urlFor(post.author.image).url()!}
                    />
                </div>
            </div>
        </Link>
    );
}
