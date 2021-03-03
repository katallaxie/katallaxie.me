import React from 'react'
import clsx from 'clsx'
export interface MenuListProps {
  children?: React.ReactNode
}

const listItemStyle = clsx(['text-2xl', 'font-bold', 'py-1'])

export const MenuList = ({
  children,
  ...props
}: MenuListProps): JSX.Element => {
  return (
    <div className="py-24 hidden lg:block" {...props}>
      <h3 className={listItemStyle}>Say Hi.</h3>
      <ul>{children}</ul>
    </div>
  )
}

export default MenuList
