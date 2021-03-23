import React from 'react'
import { Link } from 'src/generated-types'
import PageLink from 'next/link'
import clsx from 'clsx'

export type ProjectListItem = Pick<Link, 'href' | 'alt'> & {
  linkTitle: Link['title']
}
export interface ProjectListItemProps {
  link?: ProjectListItem
}

export const itemStyle = clsx(['py-6'])

export const textStyle = clsx([
  'text-2xl',
  'md:text-3xl',
  'lg:text-4xl',
  'font-normal'
])

export const descriptionStyle = clsx([
  'text-2xl',
  'md:text-3xl',
  'lg:text-4xl',
  'font-normal',
  'text-gray-500',
  'py-4'
])

export const ProjectListItem = ({
  link,
  ...props
}: ProjectListItemProps): JSX.Element => {
  return (
    <div {...props} className={itemStyle}>
      <PageLink href={link.href}>
        <a>
          <h2 className={textStyle}>{link.linkTitle}</h2>
        </a>
      </PageLink>
      <p className={descriptionStyle}>{link.alt}</p>
    </div>
  )
}

export default ProjectListItem
