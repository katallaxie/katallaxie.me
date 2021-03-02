import React from 'react'

export interface PostListProps {
  children?: React.ReactNode
}

export const PostListItem = ({
  children,
  ...props
}: PostListProps): JSX.Element => {
  return (
    <div {...props}>
      <h1>Writing.</h1>
      {children}
    </div>
  )
}

export default PostListItem
