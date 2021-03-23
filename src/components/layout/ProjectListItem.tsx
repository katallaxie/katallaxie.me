import React from 'react'
import { Link } from 'src/generated-types'
import PageLink from 'next/link'
import clsx from 'clsx'
import { H3 } from '@components/layout/default/DefaultLayoutHeading'

export type ProjectListItem = Pick<Link, 'href' | 'alt'> & {
  linkTitle: Link['title']
}
export interface ProjectListItemProps {
  link?: ProjectListItem
}

export const itemStyle = clsx(['py-3', 'xl:py-0'])

export const ProjectListItem = ({
  link,
  ...props
}: ProjectListItemProps): JSX.Element => {
  return (
    <div {...props} className={itemStyle}>
      <PageLink href={link.href}>
        <a>
          <H3>{link.linkTitle}</H3>
        </a>
      </PageLink>
      <H3 className="text-gray-500 -mt-3 md:-mt-8">{link.alt}</H3>
    </div>
  )
}

export default ProjectListItem
