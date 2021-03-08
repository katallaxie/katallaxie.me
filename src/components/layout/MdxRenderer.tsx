import React from 'react'
import useMdxContext from '@hooks/useMdx'
import { useApollo } from '@utils/apollo'
import hydrate from 'next-mdx-remote/hydrate'
import { MdxRemote } from 'next-mdx-remote/types'
import { LayoutProvider } from '@state/layout'
import { ApolloProvider } from '@apollo/react-hooks'
import { NormalizedCacheObject } from 'apollo-cache-inmemory'
import DefaultLayout from '@components/layout/DefaultLayout'
import Link from 'next/link'

export type MdxRenderComponents = MdxRemote.Components

export interface MdxRendererProps {
  client?: any
  children?: React.ReactNode
  components?: MdxRemote.Components
  provider?: MdxRemote.Provider
  slug?: string
  apolloState?: NormalizedCacheObject
}

export const MdxWrappedProvider = ({
  slug,
  client,
  children,
  ...props
}: MdxRendererProps): React.ReactNode => {
  return (
    <ApolloProvider client={client}>
      <LayoutProvider slug={slug} {...props}>
        {children}
      </LayoutProvider>
    </ApolloProvider>
  )
}
export const MdxProvider = { component: MdxWrappedProvider, props: {} }

export const MdxComponents: MdxRenderComponents = {
  DefaultLayout,
  Link
}

export const MdxRenderer = ({
  components = MdxComponents,
  slug,
  apolloState
}: MdxRendererProps): JSX.Element => {
  const mdx = useMdxContext()
  const client = useApollo(apolloState)

  const content = mdx
    ? hydrate(mdx, {
        components,
        provider: { component: MdxWrappedProvider, props: { slug, client } }
      })
    : null

  return <>{content}</>
}

export default MdxRenderer
