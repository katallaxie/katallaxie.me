import React from 'react'
import clsx from 'clsx'
import Tag from './PostLayoutTag'
import type { LayoutTag } from './PostLayoutTag'

export interface LayoutTagsProps {
  tags?: LayoutTag[]
}

export const tagsStyle = clsx(['col-span-full', 'flex', 'py-6'])

export const LayoutTags = ({ tags }: LayoutTagsProps): JSX.Element => {
  return (
    <ul className={tagsStyle}>
      {tags?.map((tag, i) => (
        <Tag tag={tag} key={i} />
      ))}
    </ul>
  )
}

export default LayoutTags
