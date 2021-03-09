import React from 'react'

type DefaultLayouWrapProps = {
  children: React.ReactNode
}

const DefaultLayoutContent = ({
  children
}: DefaultLayouWrapProps): JSX.Element => {
  return <>{children}</>
}

export default DefaultLayoutContent
