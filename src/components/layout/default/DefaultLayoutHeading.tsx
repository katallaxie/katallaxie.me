import React from 'react'
import clsx from 'clsx'

export const H1 = props => (
  <h1
    {...props}
    className={clsx(
      ['text-3xl', 'md:text-4xl', 'lg:text-5xl', 'py-8'],
      [props.className]
    )}
  />
)
export const H2 = props => (
  <h2
    {...props}
    className={clsx(['text-3xl', 'lg:text-4xl', 'py-6'], [props.className])}
  />
)
export const H3 = props => (
  <h3
    {...props}
    className={clsx([
      'text-2xl',
      'md:text-3xl',
      'py-3',
      'md:py-6',
      props.className
    ])}
  />
)
export const H4 = props => (
  <h4
    {...props}
    className={clsx(['text-xl', 'md:text-2xl', 'py-6'], [props.className])}
  />
)
export const H5 = props => <h5 {...props} />

export default {
  H1,
  H2,
  H3,
  H4,
  H5
}
