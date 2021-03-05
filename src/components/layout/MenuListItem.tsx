import React from 'react'
import PageLink from 'next/link'
import { Link } from 'src/generated-types'
import clsx from 'clsx'

export type MenuListItem = Pick<Link, 'title' | 'href'>

export interface MenuListItemProps {
  link?: MenuListItem
}

const listItemStyle = clsx([
  'text-xl',
  'lg:text-2xl',
  'py-1',
  'text-gray-500',
  'font-bold'
])
const linkStyle = clsx(['hover:text-white'])

export const MenuListItem = ({
  link,
  ...props
}: MenuListItemProps): JSX.Element => {
  return (
    <li className={listItemStyle} {...props}>
      <PageLink href={link.href}>
        <a className={linkStyle}>{link.title}</a>
      </PageLink>
    </li>
  )
}

export default MenuListItem
