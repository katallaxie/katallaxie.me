import React from 'react'
import clsx from 'clsx'

export interface HomeLayoutSectionTitle {
  children?: React.ReactNode
  className?: string
}

export const HomeLayoutSectionTitle = ({
  children,
  className,
  ...props
}: HomeLayoutSectionTitle): JSX.Element => {
  const textStyle = clsx(
    [
      'text-2xl',
      'md:text-3xl',
      'lg:text-4xl',
      'font-normal',
      'text-gray-500',
      'py-8',
      'md:py-8'
    ],
    [className]
  )

  return (
    <h1 className={textStyle} {...props}>
      {children}
    </h1>
  )
}

export default HomeLayoutSectionTitle
