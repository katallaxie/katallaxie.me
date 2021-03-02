import React from 'react'
import Link from 'next/link'
import { Page } from 'src/generated-types'

export interface PageListItemProps {
  page?: Pick<Page, 'createdAt' | 'publishedAt' | 'teaser'> & {
    pageSlug: Page['slug']
  }
}

export const PageListItem = ({
  page,
  ...props
}: PageListItemProps): JSX.Element => {
  return (
    <div {...props}>
      <p>{page.teaser}</p>
      <Link href={`/${page.pageSlug}`}>
        <a>Read more</a>
      </Link>
    </div>
  )
}

export default PageListItem
