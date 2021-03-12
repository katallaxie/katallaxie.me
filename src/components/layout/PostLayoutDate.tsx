import React from 'react'
import clsx from 'clsx'

export interface PostLayoutDateProps {
  children?: React.ReactNode
}

export const dateStyle = clsx([])

export const PostLayoutDate = ({
  children
}: PostLayoutDateProps): JSX.Element => {
  const date = new Date(children.toString())
  const formatDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)

  return <h3>{formatDate}</h3>
}

export default PostLayoutDate
