import React from 'react'
import { Page } from 'src/generated-types'
import { H4 } from '@components/layout/default/DefaultLayoutHeading'
import PageLink from './PageLink'

export type PageListItem = Pick<
  Page,
  'createdAt' | 'publishedAt' | 'teaser'
> & { pageSlug: Page['slug'] }

export interface PageListItemProps {
  page?: PageListItem
}

export const PageListItem = ({
  page,
  ...props
}: PageListItemProps): JSX.Element => {
  return (
    <div {...props}>
      <H4>{page.teaser}</H4>
      <PageLink href={`/${page.pageSlug}`} />
    </div>
  )
}

export default PageListItem
