import React from 'react'
import { Page } from 'src/generated-types'
import clsx from 'clsx'
import PageLink from './PageLink'

export type PageListItem = Pick<
  Page,
  'createdAt' | 'publishedAt' | 'teaser'
> & { pageSlug: Page['slug'] }

export interface PageListItemProps {
  page?: PageListItem
}

const textStyle = clsx(['text-xl', 'lg:text-2xl', 'py-6'])

export const PageListItem = ({
  page,
  ...props
}: PageListItemProps): JSX.Element => {
  return (
    <div {...props}>
      <p className={textStyle}>{page.teaser}</p>
      <PageLink href={`/${page.pageSlug}`} />
    </div>
  )
}

export default PageListItem
