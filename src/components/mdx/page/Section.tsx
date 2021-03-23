import React from 'react'
import clsx from 'clsx'

export interface SectionProps {
  children?: React.ReactNode
  className?: string
}

export const Section = ({ children, className }: SectionProps): JSX.Element => {
  const style = clsx(
    ['md:grid', 'md:grid-cols-12', 'pt-6', 'pb-6'],
    [className]
  )

  return <section className={style}>{children}</section>
}

export default Section
