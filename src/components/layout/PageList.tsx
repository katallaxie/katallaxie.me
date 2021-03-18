import React from 'react'
import type { PageListItem } from './PageListItem'
import Page from './PageListItem'
import clsx from 'clsx'
export interface PageListProps {
  pages?: PageListItem[]
}

const listStyle = clsx(['py-24'])

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
