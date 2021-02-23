import React from 'react'

type ContainerProps = {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps): JSX.Element => {
  return <div className="w-full mx-auto px-4">{children}</div>
}

export default Container
