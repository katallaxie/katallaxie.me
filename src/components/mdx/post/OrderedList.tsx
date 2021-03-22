import React, { forwardRef } from 'react'
import clsx from 'clsx'

export interface OrderedListProps {
  children?: React.ReactNode
  className?: string
}

export const OrderedList = forwardRef<HTMLOListElement>(
  ({ children, className, ...props }: OrderedListProps, ref) => {
    const styles = clsx(['list-decimal', 'list-inside', 'py-6'], [className])

    return (
      <ol ref={ref} className={styles} {...props}>
        {children}
      </ol>
    )
  }
)

if (process.env.NODE_ENV === 'development') {
  OrderedList.displayName = 'OrderedList'
}

export default OrderedList
