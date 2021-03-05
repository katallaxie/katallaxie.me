import React from 'react'
import type { MenuListItem } from './MenuListItem'
import MenuItem from './MenuListItem'

export interface MenuListProps {
  links?: MenuListItem[]
}

export const MenuList = ({ links, ...props }: MenuListProps): JSX.Element => {
  return (
    <div className="hidden lg:block" {...props}>
      <ul>
        {links.map((link, i) => (
          <MenuItem key={i} link={link} />
        ))}
      </ul>
    </div>
  )
}

export default MenuList
