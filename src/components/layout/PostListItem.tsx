import React from 'react'
import { Post } from 'src/generated-types'
import clsx from 'clsx'

export interface PostListItemProps {
  post?: Pick<Post, 'title' | 'excerpt' | 'createdAt' | 'publishedAt'>
}

export const textStyle = clsx(['text-4xl', 'font-normal'])
export const dateStyle = clsx([
  'text-4xl',
  'font-normal',
  'text-gray-500',
  'italic'
])

export const PostListItem = ({
  post,
  ...props
}: PostListItemProps): JSX.Element => {
  const date = new Date(post.publishedAt)
  const formatDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)

  return (
    <div {...props}>
      <h2 className={textStyle}>{post.title}</h2>
      <p className={dateStyle}>{formatDate}</p>
    </div>
  )
}

export default PostListItem
