import React from 'react'

export interface PostListProps {
  children?: React.ReactNode
}

export const PostListItem = ({
  children,
  ...props
}: PostListProps): JSX.Element => {
  return <div {...props}>{children}</div>
}

export default PostListItem
