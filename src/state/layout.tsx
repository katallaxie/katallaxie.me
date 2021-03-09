import { initializeApollo } from '@utils/apollo'
import { LayoutDocument, LayoutQuery } from '../generated-types'
import { MdxComponents as components } from '@components/layout/MdxRenderer'
import { useQuery } from '@apollo/react-hooks'
import React from 'react'
import renderToString from 'next-mdx-remote/render-to-string'
import type { MultiversalPageProps } from '@type/page/MultiversalPageProps'
import type { TComposeFunction } from '@utils/compose'

export type LayoutQueryResult = LayoutQuery
export interface LayoutProviderProps {
  children?: React.ReactNode
  slug?: string
}

const LayoutContext = React.createContext<LayoutQueryResult | null>(null)

export const LayoutProvider = ({
  children,
  slug
}: LayoutProviderProps): JSX.Element => {
  const queryOptions = {
    variables: {
      slug
    }
  }

  const { data } = useQuery(LayoutDocument, queryOptions)

  return (
    <LayoutContext.Provider value={data}>{children}</LayoutContext.Provider>
  )
}
export const LayoutConsumer = LayoutContext.Consumer
export default LayoutContext

export const getLayoutStaticProps: TComposeFunction<MultiversalPageProps> = async ({
  params
}) => {
  const apolloClient = initializeApollo()
  const variables = {
    slug: params?.slug
  }

  const queryOptions = {
    displayName: 'LAYOUT_QUERY',
    query: LayoutDocument,
    variables
  }

  const { errors, data } = await apolloClient.query(queryOptions)

  const mdxSource = await renderToString(data?.page?.content, {
    components,
    provider: { component: LayoutContext.Provider, props: { value: data } }
  })

  if (errors) {
    console.error(errors)
    throw new Error('Errors were detected in GraphQL query.')
  }

  return {
    props: {
      apolloState: apolloClient.cache.extract(),
      isReadyToRender: true,
      isStaticRendering: true,
      mdxSource
    }
  }
}
