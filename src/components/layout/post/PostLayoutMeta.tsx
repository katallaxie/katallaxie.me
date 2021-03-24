import React from 'react'
import Tags from './PostLayoutTags'
import Date from './PostLayoutDate'
import { H2 } from '@components/layout/default/DefaultLayoutHeading'
import type { LayoutTag } from './PostLayoutTag'

export interface MetaProps {
  children?: React.ReactNode
  title?: string
  tags?: LayoutTag[]
  updatedAt?: string
  createdAt?: string
}

export const Meta = ({ title, createdAt, tags }: MetaProps): JSX.Element => {
  return (
    <aside className="py-8">
      <H2>{title}</H2>
      <Date>{createdAt}</Date>
      <Tags tags={tags} />
    </aside>
  )
}

export default Meta
