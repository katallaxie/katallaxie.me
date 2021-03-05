import React from 'react'
import type { PostListItem } from './PostListItem'
import Post from './PostListItem'
import SectionTitle from './Section'

export interface PostListProps {
  posts?: PostListItem[]
}

export const PostList = ({ posts, ...props }: PostListProps): JSX.Element => {
  return (
    <div {...props}>
      <SectionTitle>Writing.</SectionTitle>
      {posts.map((post, i) => (
        <Post key={i} post={post} />
      ))}
    </div>
  )
}

export default PostList
