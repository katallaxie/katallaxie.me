import React from 'react'
import PageLink from 'next/link'
import { Link } from 'src/generated-types'
import clsx from 'clsx'
export interface MenuListItemProps {
  menuItem?: Pick<Link, 'title' | 'href'>
}

const listItemStyle = clsx(['text-2xl', 'py-1', 'text-gray-500', 'font-bold'])
const linkStyle = clsx(['hover:text-white'])

export const MenuListItem = ({
  menuItem,
  ...props
}: MenuListItemProps): JSX.Element => {
  return (
    <li className={listItemStyle} {...props}>
      <PageLink href={menuItem.href}>
        <a className={linkStyle}>{menuItem.title}</a>
      </PageLink>
    </li>
  )
}

export default MenuListItem
