import React from 'react'
import PageContext, { PageQueryResult } from '@state/page'

const usePageContext = (): PageQueryResult =>
  React.useContext<PageQueryResult | null>(PageContext)

export default usePageContext
