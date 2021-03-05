import React from 'react'
import type { PageListItem } from './PageListItem'
import Page from './PageListItem'

export interface PageListProps {
  pages?: PageListItem[]
}

export const PageList = ({ pages, ...props }: PageListProps): JSX.Element => {
  return (
    <div {...props}>
      {pages.map((page, i) => (
        <Page key={i} page={page} />
      ))}
    </div>
  )
}

export default PageList
