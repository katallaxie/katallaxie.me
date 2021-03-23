import React from 'react'
import type { PostListItem } from './PostListItem'
import Post from './PostListItem'
import { H2 } from '@components/layout/default/DefaultLayoutHeading'

export interface PostListProps {
  posts?: PostListItem[]
}

export const PostList = ({ posts, ...props }: PostListProps): JSX.Element => {
  return (
    <section className="pb-8 lg:pb-12" {...props}>
      <H2 className="text-gray-500">Writing.</H2>
      {posts.map((post, i) => (
        <Post key={i} post={post} />
      ))}
    </section>
  )
}

export default PostList
