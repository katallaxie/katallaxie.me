import React from 'react'
import LayoutContext, { PageQueryResult } from '@state/page'

const usePageContext = (): PageQueryResult =>
  React.useContext<PageQueryResult | null>(LayoutContext)

export default usePageContext
