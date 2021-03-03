import React from 'react'
import clsx from 'clsx'

export interface SectionProps {
  children?: React.ReactNode
}

export const textStyle = clsx([
  'text-4xl',
  'font-normal',
  'text-gray-500',
  'py-12'
])

export const Section = ({ children }: SectionProps): JSX.Element => {
  return <h1 className={textStyle}>{children}</h1>
}

export default Section
