import React from 'react'

type PostLayoutWrapProps = {
  children: React.ReactNode
}

const PostLayoutContent = ({ children }: PostLayoutWrapProps): JSX.Element => {
  return <>{children}</>
}

export default PostLayoutContent
