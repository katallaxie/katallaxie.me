import React from 'react'
import clsx from 'clsx'

type DefaultLayouContentProps = {
  children: React.ReactNode
}

const contentStyle = clsx([
  'flex-1',
  'lg:pl-12',
  'lg:py-24',
  'lg:border-l',
  'lg:border-gray-800',
  'xl:py-36'
])

const DefaultLayoutContent = ({
  children,
  ...props
}: DefaultLayouContentProps): JSX.Element => {
  return (
    <div className={contentStyle} {...props}>
      {children}
    </div>
  )
}

export default DefaultLayoutContent
