import React from 'react'
import { Post } from 'src/generated-types'

export interface PostListItemProps {
  post?: Pick<Post, 'title' | 'excerpt' | 'createdAt' | 'publishedAt'>
}

export const PostListItem = ({
  post,
  ...props
}: PostListItemProps): JSX.Element => {
  return (
    <div {...props}>
      <h1>{post.title}</h1>
      <p>{post.publishedAt}</p>
    </div>
  )
}

export default PostListItem
