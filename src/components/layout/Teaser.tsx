import React from 'react'
import Wrap from './DefaultLayoutWrap'
import clsx from 'clsx'

export interface TeaserProps {
  children?: React.ReactNode
}

export const headerStyle = clsx([
  'col-span-12',
  'lg:col-span-10',
  'xl:col-span-8',
  'text-2xl',
  'md:text-3xl',
  'lg:text-4xl',
  'pt-20',
  'pb-16',
  'md:pt-22',
  'md:pb-18',
  'lg:pt-32',
  'lg:pb-22',
  'xl:pt-30',
  'xl:pb-30'
])

export const Teaser = ({ children }: TeaserProps): JSX.Element => {
  return (
    <Wrap>
      <h1 className={headerStyle}>{children}</h1>
    </Wrap>
  )
}

export default Teaser
