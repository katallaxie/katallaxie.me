import React from 'react'
import clsx from 'clsx'

type DefaultLayouContextProps = {
  children: React.ReactNode
}

const contextStyle = clsx([
  'flex',
  'flex-col',
  'md:w-5/12',
  'lg:pr-12',
  'lg:py-48'
])

const DefaultLayoutContext = ({
  children,
  ...props
}: DefaultLayouContextProps): JSX.Element => {
  return (
    <div className={contextStyle} {...props}>
      {children}
    </div>
  )
}

export default DefaultLayoutContext
