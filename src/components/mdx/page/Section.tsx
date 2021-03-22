import React from 'react'
import clsx from 'clsx'

export interface SectionProps {
  children?: React.ReactNode
  className?: string
}

export const Section = ({ children, className }: SectionProps): JSX.Element => {
  const style = clsx(
    ['xl:col-start-6', 'col-span-full', 'lg:col-span-8', 'z-10'],
    [className]
  )

  return <div className={style}>{children}</div>
}

export default Section
