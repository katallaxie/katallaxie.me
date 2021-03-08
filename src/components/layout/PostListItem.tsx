import React from 'react'
import { Post } from 'src/generated-types'
import clsx from 'clsx'

export type PostListItem = Pick<
  Post,
  'title' | 'excerpt' | 'createdAt' | 'publishedAt'
>

export interface PostListItemProps {
  post?: PostListItem
}

export const textStyle = clsx([
  'text-2xl',
  'md:text-3xl',
  'lg:text-4xl',
  'font-normal'
])
export const dateStyle = clsx([
  'text-2xl',
  'md:text-3xl',
  'lg:text-4xl',
  'font-normal',
  'text-gray-500',
  'py-4',
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
