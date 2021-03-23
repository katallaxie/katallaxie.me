import React from 'react'
import clsx from 'clsx'

export interface UnorderedListItemProps {
  children?: React.ReactNode
  className?: string
}

export const UnorderedListItem = ({
  children,
  className
}: UnorderedListItemProps): JSX.Element => {
  const style = clsx(
    [
      'py-3',
      'col-span-full',
      'lg:col-span-6',
      'text-xl',
      'md:text-2xl',
      'leading-normal'
    ],
    [className]
  )

  return <li className={style}>{children}</li>
}

export default UnorderedListItem
