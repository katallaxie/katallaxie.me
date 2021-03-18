import React from 'react'
import clsx from 'clsx'

type DefaultLayoutWrapProps = {
  children?: React.ReactNode
  className?: string
}

const DefaultLayoutWrap = ({
  children,
  className,
  ...props
}: DefaultLayoutWrapProps): JSX.Element => {
  const wrapStyle = clsx(
    ['grid', 'grid-cols-12', 'gap-4', 'min-h-screen'],
    [className]
  )

  return (
    <div className={wrapStyle} {...props}>
      {children}
    </div>
  )
}

export default DefaultLayoutWrap
