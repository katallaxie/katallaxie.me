import React from 'react'
import clsx from 'clsx'

type HomeLayoutContextProps = {
  children: React.ReactNode
}

const contextStyle = clsx(['col-span-7'])

const HomeLayoutContext = ({
  children,
  ...props
}: HomeLayoutContextProps): JSX.Element => {
  return (
    <div className={contextStyle} {...props}>
      {children}
    </div>
  )
}

export default HomeLayoutContext
