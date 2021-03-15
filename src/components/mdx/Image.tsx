import React, { forwardRef } from 'react'
import clsx from 'clsx'

export interface ImageProps {
  children?: React.ReactNode
  className?: string
}

export const Image = forwardRef<HTMLImageElement>(
  ({ className, ...props }: ImageProps, ref) => {
    const styles = clsx(
      ['my-3', 'w-full', 'justify-center', 'items-center'],
      [className]
    )

    return <img ref={ref} className={styles} {...props} />
  }
)

if (process.env.NODE_ENV === 'development') {
  Image.displayName = 'Image'
}

export default Image
