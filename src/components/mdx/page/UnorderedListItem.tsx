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
  const style = clsx(['py-3', 'col-span-6'], [className])

  return <li className={style}>{children}</li>
}

export default UnorderedListItem
