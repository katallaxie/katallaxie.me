import React, { forwardRef } from 'react'
import clsx from 'clsx'

export interface ParagraphProps {
  children?: React.ReactNode
  className?: string
}

export const Paragraph = forwardRef<HTMLParagraphElement>(
  ({ children, className, ...props }: ParagraphProps, ref) => {
    const styles = clsx(
      ['text-xl', 'leading-normal', 'col-start-1', 'col-span-8', 'py-6'],
      [className]
    )

    return (
      <p ref={ref} className={styles} {...props}>
        {children}
      </p>
    )
  }
)

if (process.env.NODE_ENV === 'development') {
  Paragraph.displayName = 'Paragraph'
}

export default Paragraph
