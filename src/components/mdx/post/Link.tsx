import React, { forwardRef } from 'react'
import clsx from 'clsx'

export interface LinkProps {
  children?: React.ReactNode
  className?: string
}

export const Link = forwardRef<HTMLAnchorElement>(
  ({ children, className, ...props }: LinkProps, ref) => {
    const styles = clsx(
      ['border-b-2', 'border-yellow-300', 'not-italic'],
      [className]
    )

    return (
      <a
        ref={ref}
        className={styles}
        target="_blank"
        rel="noreferrer"
        {...props}
      >
        {children}
      </a>
    )
  }
)

if (process.env.NODE_ENV === 'development') {
  Link.displayName = 'Link'
}

export default Link
