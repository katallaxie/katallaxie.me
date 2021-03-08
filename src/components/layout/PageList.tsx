import React from 'react'
import type { PageListItem } from './PageListItem'
import Page from './PageListItem'
import clsx from 'clsx'
export interface PageListProps {
  pages?: PageListItem[]
}

const listStyle = clsx(['pt-28', 'pb-4', 'md:pb-16', 'lg:pb-24'])

export const PageList = ({ pages, ...props }: PageListProps): JSX.Element => {
  return (
    <div {...props} className={listStyle}>
      {pages.map((page, i) => (
        <Page key={i} page={page} />
      ))}
    </div>
  )
}

export default PageList
