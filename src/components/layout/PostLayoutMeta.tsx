import React from 'react'
import Wrap from './DefaultLayoutWrap'
import clsx from 'clsx'
import Tags from './PostLayoutTags'
import Date from './PostLayoutDate'
import type { LayoutTag } from './PostLayoutTag'

export interface MetaProps {
  children?: React.ReactNode
  title?: string
  tags?: LayoutTag[]
  updatedAt?: string
  createdAt?: string
}

export const headerStyle = clsx([
  'col-span-12',
  'lg:col-span-10',
  'lg:pb-22',
  'lg:pt-32',
  'lg:text-4xl',
  'md:pb-18',
  'md:pt-22',
  'md:text-3xl',
  'pb-16',
  'pt-20',
  'text-2xl',
  'xl:col-span-8',
  'xl:pb-30',
  'xl:pt-30'
])

export const Meta = ({ title, createdAt, tags }: MetaProps): JSX.Element => {
  return (
    <Wrap>
      <h1 className={headerStyle}>{title}</h1>
      <Date>{createdAt}</Date>
      <Tags tags={tags} />
    </Wrap>
  )
}

export default Meta
