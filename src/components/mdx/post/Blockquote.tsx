import React, { forwardRef } from 'react'
import clsx from 'clsx'

export interface BlockquoteProps {
  children?: React.ReactNode
  className?: string
}

export const Blockquote = forwardRef<HTMLQuoteElement>(
  ({ children, className, ...props }: BlockquoteProps, ref) => {
    const styles = clsx(
      ['text-gray-500', 'px-6', 'border-l-4', 'border-gray-500'],
      [className]
    )

    return (
      <blockquote ref={ref} className={styles} {...props}>
        {children}
      </blockquote>
    )
  }
)

if (process.env.NODE_ENV === 'development') {
  Blockquote.displayName = 'Paragraph'
}

export default Blockquote
