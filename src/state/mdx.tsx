import React from 'react'
import { MdxRemote } from 'next-mdx-remote/types'

export type MdxResult = MdxRemote.Source
export interface MdxProviderProps {
  source?: MdxRemote.Source
  children?: React.ReactNode
}

const MdxContext = React.createContext<MdxResult | null>(null)

export const MdxProvider = ({
  source,
  children
}: MdxProviderProps): JSX.Element => (
  <MdxContext.Provider value={source}>{children}</MdxContext.Provider>
)

export const MdxConsumer = MdxContext.Consumer
export default MdxContext
