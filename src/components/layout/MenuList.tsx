import React from 'react'
import MenuItem from './MenuListItem'
import { useMenuContext } from '@state/menu'
import MotionBox from '@components/animate/MotionBox'
import MotionUnorderedList from '@components/animate/MotionUnorderedList'
import MotionListItem from '@components/animate/MotionListItem'
import clsx from 'clsx'

export interface MenuListProps {
  className?: string
}

export const MenuList = ({
  className,
  ...props
}: MenuListProps): JSX.Element => {
  const menu = useMenuContext()
  const itemStyle = clsx([
    'text-xl',
    'lg:text-2xl',
    'py-2',
    'text-gray-500',
    'font-bold'
  ])

  const style = clsx(['hidden', 'lg:block', 'py-6'], [className])

  return (
    <MotionBox className={style} {...props}>
      <MotionUnorderedList>
        {menu?.map((item, i) => (
          <MotionListItem key={i} className={itemStyle}>
            <MenuItem link={item}></MenuItem>
          </MotionListItem>
        ))}
      </MotionUnorderedList>
    </MotionBox>
  )
}

export default MenuList
