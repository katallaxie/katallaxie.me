import React, { forwardRef } from 'react'
import clsx from 'clsx'

export interface HeadingProps {
  children?: React.ReactNode
  className?: string
}

const h1 = props => <h1 {...props} className={clsx(['text-5xl', 'py-8'])} />
const h2 = props => <h2 {...props} className={clsx(['text-4xl', 'py-8'])} />
const h3 = props => <h3 {...props} className={clsx(['text-3xl', 'py-8'])} />
const h4 = props => <h4 {...props} />
const h5 = props => <h5 {...props} />

export const Heading = (
  Component: React.ComponentType<React.PropsWithRef<Record<string, unknown>>>
): React.ForwardRefExoticComponent<React.RefAttributes<HTMLHeadingElement>> => {
  const cmp = forwardRef<HTMLHeadingElement>(
    ({ children, className, ...props }: HeadingProps, ref) => {
      const styles = clsx([className])

      return (
        <Component ref={ref} className={styles} {...props}>
          {children}
        </Component>
      )
    }
  )

  if (process.env.NODE_ENV === 'development') {
    cmp.displayName = 'Heading'
  }

  return cmp
}

export const H1 = Heading(h1)
export const H2 = Heading(h2)
export const H3 = Heading(h3)
export const H4 = Heading(h4)
export const H5 = Heading(h5)

export default Heading
