import React from 'react'
import clsx from 'clsx'

type PostLayoutWrapProps = {
  children?: React.ReactNode
  className?: string
}

const PostLayoutWrap = ({
  children,
  className,
  ...props
}: PostLayoutWrapProps): JSX.Element => {
  const wrapStyle = clsx(
    [
      'grid',
      'grid-cols-12',
      'gap-4',
      'py-8',
      'md:py-16',
      'lg:py-24',
      'xl:py-36'
    ],
    [className]
  )

  return (
    <div className={wrapStyle} {...props}>
      {children}
    </div>
  )
}

export default PostLayoutWrap
