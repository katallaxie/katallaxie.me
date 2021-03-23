import React from 'react'
import clsx from 'clsx'

export interface SectionProps {
  children?: React.ReactNode
  className?: string
}

export const Section = ({ children, className }: SectionProps): JSX.Element => {
  const style = clsx(['md:grid', 'md:grid-cols-12'], [className])

  return <div className={style}>{children}</div>
}

export default Section
