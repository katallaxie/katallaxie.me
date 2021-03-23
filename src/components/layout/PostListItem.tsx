import React from 'react'
import { Post } from 'src/generated-types'
import clsx from 'clsx'
import PageLink from 'next/link'
import { H3 } from '@components/layout/default/DefaultLayoutHeading'

export type PostListItem = Pick<
  Post,
  'title' | 'excerpt' | 'createdAt' | 'publishedAt' | 'slug'
>

export interface PostListItemProps {
  post?: PostListItem
}

export const itemStyle = clsx(['py-3', 'xl:py-0'])

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
    <div className={itemStyle} {...props}>
      <PageLink href={`/posts/${post?.slug}`} {...props}>
        <a>
          <H3>{post.title}</H3>
        </a>
      </PageLink>
      <H3 className="text-gray-500 -mt-3 md:-mt-8">{formatDate}</H3>
    </div>
  )
}

export default PostListItem
