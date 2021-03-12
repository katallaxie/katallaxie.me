import React from 'react'
import clsx from 'clsx'
import type { Tag } from '../../generated-types'

export type LayoutTag = Pick<Tag, 'slug'>

export interface LayoutTagProps {
  tag?: LayoutTag
}

export const tagStyle = clsx([
  'rounded-xl',
  'text-xl',
  'border-gray-900',
  'text-gray-400',
  'border-2',
  'py-1',
  'px-3',
  'mr-2'
])

export const hashStyle = clsx(['text-gray-700', 'px-0.5'])

export const LayoutTag = ({ tag }: LayoutTagProps): JSX.Element => {
  return (
    <li className={tagStyle}>
      <span className={hashStyle}>#</span>
      {tag.slug}
    </li>
  )
}

export default LayoutTag
