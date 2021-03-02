import React from 'react'
import PageLink from 'next/link'
import { Link } from 'src/generated-types'

export interface MenuListItemProps {
  menuItem?: Pick<Link, 'title' | 'href'>
}

export const MenuListItem = ({
  menuItem,
  ...props
}: MenuListItemProps): JSX.Element => {
  return (
    <li {...props}>
      <PageLink href={menuItem.href}>{menuItem.title}</PageLink>
    </li>
  )
}

export default MenuListItem
