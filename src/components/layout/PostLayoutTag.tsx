import React from 'react'
import clsx from 'clsx'
import type { Tag } from '../../generated-types'

export type LayoutTag = Pick<Tag, 'slug'>

export interface LayoutTagProps {
  tag?: LayoutTag
}

export const tagStyle = clsx([])

export const LayoutTag = ({ tag }: LayoutTagProps): JSX.Element => {
  return <li>{`#${tag.slug}`}</li>
}

export default LayoutTag
