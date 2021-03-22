import React from 'react'
import clsx from 'clsx'

type PageLayoutContentProps = {
  children: React.ReactNode
}

const contentStyle = clsx(['col-span-7'])

const PageLayoutContent = ({
  children,
  ...props
}: PageLayoutContentProps): JSX.Element => {
  return (
    <div className={contentStyle} {...props}>
      {children}
    </div>
  )
}

export default PageLayoutContent
