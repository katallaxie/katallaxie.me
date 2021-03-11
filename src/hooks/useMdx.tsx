import React from 'react'
import MdxContext, { MdxResult } from '@state/mdx'

const useMdxContext = (): MdxResult => React.useContext(MdxContext)

export default useMdxContext
