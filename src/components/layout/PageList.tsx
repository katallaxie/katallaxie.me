import React from 'react'

export interface PageListProps {
  children?: React.ReactNode
}

export const PageList = ({
  children,
  ...props
}: PageListProps): JSX.Element => {
  return <div {...props}>{children}</div>
}

export default PageList
