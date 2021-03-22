import React from 'react'
import clsx from 'clsx'

type PostLayoutContentProps = {
  children: React.ReactNode
}

const contextStyle = clsx(['col-span-7'])

const PostLayoutContent = ({
  children,
  ...props
}: PostLayoutContentProps): JSX.Element => {
  return (
    <div className={contextStyle} {...props}>
      {children}
    </div>
  )
}

export default PostLayoutContent
