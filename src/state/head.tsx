import React from 'react'

export interface Head {
  seoTitle?: string
  seoDescription?: string
  seoUrl?: string
  seoImage?: string
  favicon?: string
  additionalContent?: React.ReactElement
}

export interface HeadProviderProps {
  children?: React.ReactNode
  data?: Head
}

const HeadContext = React.createContext<Head | null>(null)

export const HeadProvider = ({
  children,
  data
}: HeadProviderProps): JSX.Element => (
  <HeadContext.Provider value={data}>{children}</HeadContext.Provider>
)

export const HeadConsumer = HeadContext.Consumer
export default HeadContext

export type MultiversalPageHeadProps = {
  head?: Head
}
