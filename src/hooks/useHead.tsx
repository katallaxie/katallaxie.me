import React from 'react'
import HeadContext, { Head } from '@state/head'

const useHeadContext = (): Head => {
  return React.useContext(HeadContext)
}

export default useHeadContext
