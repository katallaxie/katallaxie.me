import React from 'react'
import { Link } from 'src/generated-types'
import PageLink from 'next/link'
import clsx from 'clsx'

export interface ProjectListItemProps {
  link?: Pick<Link, 'href' | 'alt'> & {
    linkTitle: Link['title']
  }
}

export const textStyle = clsx(['text-4xl', 'font-normal'])
export const dateStyle = clsx([
  'text-4xl',
  'font-normal',
  'text-gray-500',
  'italic'
])

export const ProjectListItem = ({
  link,
  ...props
}: ProjectListItemProps): JSX.Element => {
  return (
    <div {...props}>
      <PageLink href={link.href}>
        <a>
          <h2 className={textStyle}>{link.linkTitle}</h2>
        </a>
      </PageLink>
    </div>
  )
}

export default ProjectListItem
