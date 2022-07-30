import React from "react";

import Post from "./Post";
import { Post as _Post } from "../typing";

interface Props {
    posts: [_Post];
}

export default function Posts({ posts } : Props) {
    return (
        <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6">
            {posts.map((post: _Post) => (
                <Post key={post._id} post={post} />
            ))}
        </div>
    );
}
