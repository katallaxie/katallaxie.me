import React from 'react'
import clsx from 'clsx'

type DefaultLayoutWrapperProps = {
  children: React.ReactNode
}

const wrapperStyle = clsx([
  'w-full',
  'lg:min-h-screen',
  'lg:flex',
  'lg:items-stretch',
  'lg:justify-between'
])

const DefaultLayoutWrapper = ({
  children,
  ...props
}: DefaultLayoutWrapperProps): JSX.Element => {
  return (
    <div className={wrapperStyle} {...props}>
      {children}
    </div>
  )
}

export default DefaultLayoutWrapper
