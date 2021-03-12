import React, { forwardRef } from 'react'
import clsx from 'clsx'

export interface ParagraphProps {
  children?: React.ReactNode
  className?: string
}

export const Paragraph = forwardRef<HTMLParagraphElement>(
  ({ children, className, ...props }: ParagraphProps, ref) => {
    const styles = clsx([], [className])

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
