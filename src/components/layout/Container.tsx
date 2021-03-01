import React from 'react'

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

const Container = ({
  children,
  className = '',
  ...props
}: ContainerProps): JSX.Element => {
  return (
    <div
      className={`${className} container items-center justify-between flex mx-auto left-0 py-12 lg:py-24 px-6 md:px-12 lg:px-24 xl:px-24 right-0 max-w-screen-xl`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
