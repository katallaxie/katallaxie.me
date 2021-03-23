import React from 'react'
import clsx from 'clsx'

export interface UnorderedListProps {
  children?: React.ReactNode
  className?: string
  title?: string
}

export const UnorderedList = ({
  children,
  className
}: UnorderedListProps): JSX.Element => {
  const style = clsx(
    ['col-span-full', 'md:grid', 'md:grid-cols-12', 'py-3', 'lg:py-6'],
    [className]
  )

  return <ul className={style}>{children}</ul>
}

export default UnorderedList
