import React from 'react'

export interface MenuListProps {
  children?: React.ReactNode
}

export const MenuList = ({
  children,
  ...props
}: MenuListProps): JSX.Element => {
  return (
    <div {...props}>
      <h3>Say Hi.</h3>
      <ul>{children}</ul>
    </div>
  )
}

export default MenuList
