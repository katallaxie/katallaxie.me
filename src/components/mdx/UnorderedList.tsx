import React, { forwardRef } from 'react'
import clsx from 'clsx'

export interface UnorderedListProps {
  children?: React.ReactNode
  className?: string
}

export const UnorderedList = forwardRef<HTMLUListElement>(
  ({ children, className, ...props }: UnorderedListProps, ref) => {
    const styles = clsx(['list-disc', 'list-inside', 'py-6'], [className])

    return (
      <ul ref={ref} className={styles} {...props}>
        {children}
      </ul>
    )
  }
)

if (process.env.NODE_ENV === 'development') {
  UnorderedList.displayName = 'UnorderedList'
}

export default UnorderedList
