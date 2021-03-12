import React from 'react'
import LayoutContext, { PostQueryResult } from '@state/post'

const usePostContext = (): PostQueryResult =>
  React.useContext<PostQueryResult | null>(LayoutContext)

export default usePostContext
