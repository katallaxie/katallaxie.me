import React from 'react'
import clsx from 'clsx'

export interface UnorderedListHeadingProps {
  children?: React.ReactNode
  className?: string
}

export const UnorderedListHeading = ({
  children,
  className
}: UnorderedListHeadingProps): JSX.Element => {
  const style = clsx(
    [
      'text-2xl',
      'lg:text-3xl',
      'py-6',
      'border-b',
      'xl:text-current',
      'border-gray-500',
      'xl:border-none'
    ],
    [className]
  )

  return <h3 className={style}>{children}</h3>
}

export default UnorderedListHeading
