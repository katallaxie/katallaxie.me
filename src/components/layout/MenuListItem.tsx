import React from 'react'
import PageLink from './PageLink'
import { Link } from 'src/generated-types'

export type MenuListItem = Pick<Link, 'title' | 'href'>

export interface MenuListItemProps {
  link?: MenuListItem
}

export const MenuListItem = ({
  link,
  ...props
}: MenuListItemProps): JSX.Element => {
  return <PageLink href={link.href} text={link.title} {...props} />
}

export default MenuListItem
