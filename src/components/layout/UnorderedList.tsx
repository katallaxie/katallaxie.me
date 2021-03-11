import React from 'react'
import clsx from 'clsx'

export interface UnorderedListProps {
  children?: React.ReactNode
  className?: string
}

export const UnorderedList = ({
  children,
  className
}: UnorderedListProps): JSX.Element => {
  const style = clsx(
    ['text-2xl', 'sm:grid', 'md:grid-cols-12', 'md:gap-4', 'lg:block'],
    [className]
  )

  return <ul className={style}>{children}</ul>
}

export default UnorderedList
