import React from 'react'
import clsx from 'clsx'

export interface TeaserProps {
  children?: React.ReactNode
}

export const headerStyle = clsx([
  'col-span-12',
  'lg:col-span-10',
  'xl:col-span-8',
  'text-3xl',
  'lg:text-4xl',
  'py-16'
  // 'md:w-10/12',
  // 'lg:w-8/12',
  // 'xl:w-6/12',
  // 'text-3xl',
  // 'lg:text-4xl',
  // 'py-16'
])

export const Teaser = ({ children }: TeaserProps): JSX.Element => {
  return <h1 className={headerStyle}>{children}</h1>
}

export default Teaser
