import React from 'react'
import MenuItem from './MenuListItem'
import { useMenuContext } from '@state/menu'
import MotionUnorderedList from '@components/animate/MotionUnorderedList'
import MotionListItem from '@components/animate/MotionListItem'
import clsx from 'clsx'

const itemStyle = clsx([
  'text-xl',
  'lg:text-2xl',
  'py-2',
  'text-gray-500',
  'font-bold'
])

export const MenuList = (props): JSX.Element => {
  const menu = useMenuContext()

  return (
    <div className="hidden lg:block" {...props}>
      <MotionUnorderedList>
        {menu.map((item, i) => (
          <MotionListItem key={i} className={itemStyle}>
            <MenuItem link={item}></MenuItem>
          </MotionListItem>
        ))}
      </MotionUnorderedList>
    </div>
  )
}

export default MenuList
