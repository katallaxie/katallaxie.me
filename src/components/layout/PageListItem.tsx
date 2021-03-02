import React from 'react'
import Link from 'next/link'
import { Page } from 'src/generated-types'
import clsx from 'clsx'

export interface PageListItemProps {
  page?: Pick<Page, 'createdAt' | 'publishedAt' | 'teaser'> & {
    pageSlug: Page['slug']
  }
}

const textStyle = clsx(['text-xl', 'lg:text-2xl'])
const linkStyle = clsx(['block', 'text-xl', 'lg:text-2xl', 'py-6'])

export const PageListItem = ({
  page,
  ...props
}: PageListItemProps): JSX.Element => {
  return (
    <div {...props}>
      <p className={textStyle}>{page.teaser}</p>
      <Link href={`/${page.pageSlug}`}>
        <a className={linkStyle}>Read more</a>
      </Link>
    </div>
  )
}

export default PageListItem
