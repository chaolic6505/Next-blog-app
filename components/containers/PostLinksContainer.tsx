import React from 'react'

import { Post } from '../../typing'
import PostLinkContainer from './PostLinkContainer'

interface PostsContainerProps {
  posts: [Post]
}

export default function PostsContainer({ posts }: PostsContainerProps) {
  return (
    <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6">
      {posts.map((post: Post) => (
        <PostLinkContainer post={post} key={post._id} />
      ))}
    </div>
  )
}
