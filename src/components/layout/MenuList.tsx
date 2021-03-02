import React from 'react'

export interface MenuListProps {
  children?: React.ReactNode
}

export const MenuList = ({
  children,
  ...props
}: MenuListProps): JSX.Element => {
  return (
    <div className="py-24 hidden lg:block" {...props}>
      <h3>Say Hi.</h3>
      <ul>{children}</ul>
    </div>
  )
}

export default MenuList
