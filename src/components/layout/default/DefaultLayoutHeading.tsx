import React from 'react'
import clsx from 'clsx'

export const H1 = props => (
  <h1 {...props} className={clsx(['text-5xl', 'py-8'])} />
)
export const H2 = props => (
  <h2 {...props} className={clsx(['text-4xl', 'py-8'])} />
)
export const H3 = props => (
  <h3 {...props} className={clsx(['text-3xl', 'py-8'])} />
)
export const H4 = props => (
  <h4 {...props} className={clsx(['text-2xl', 'py-6'])} />
)
export const H5 = props => <h5 {...props} />

export default {
  H1,
  H2,
  H3,
  H4,
  H5
}
