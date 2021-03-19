import React from 'react'
import clsx from 'clsx'

type PostLayoutContextProps = {
  children: React.ReactNode
}

const contextStyle = clsx(['col-span-7'])

const PostLayoutContext = ({
  children,
  ...props
}: PostLayoutContextProps): JSX.Element => {
  return (
    <div className={contextStyle} {...props}>
      {children}
    </div>
  )
}

export default PostLayoutContext
