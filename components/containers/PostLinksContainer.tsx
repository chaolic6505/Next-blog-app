import React from "react";

import PostLinkContainer from "./PostLinkContainer";
import { Post as _Post } from "../../typing";

interface PostsContainerProps {
    posts: [_Post];
}

export default function PostsContainer({ posts } : PostsContainerProps) {
    return (
        <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6">
            {posts.map((post: _Post) => (
                <PostLinkContainer
                    post={post}
                    key={post._id}
                />
            ))}
        </div>
    );
}
