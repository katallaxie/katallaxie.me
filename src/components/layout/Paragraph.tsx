import React from 'react'
import clsx from 'clsx'

export interface ParagraphProps {
  children?: React.ReactNode
  className?: string
}

export const Paragraph = ({
  children,
  className
}: ParagraphProps): JSX.Element => {
  const style = clsx(['text-3xl', 'py-4', 'lg:py-6', 'z-10'], [className])

  return <p className={style}>{children}</p>
}

export default Paragraph
