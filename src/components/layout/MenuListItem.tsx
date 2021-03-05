import React from 'react'
import PageLink from './PageLink'
import { Link } from 'src/generated-types'
import clsx from 'clsx'

export type MenuListItem = Pick<Link, 'title' | 'href'>

export interface MenuListItemProps {
  link?: MenuListItem
}

const listItemStyle = clsx([
  'text-xl',
  'lg:text-2xl',
  'py-2',
  'text-gray-500',
  'font-bold'
])

export const MenuListItem = ({
  link,
  ...props
}: MenuListItemProps): JSX.Element => {
  return (
    <li className={listItemStyle} {...props}>
      <PageLink href={link.href} text={link.title} />
    </li>
  )
}

export default MenuListItem
