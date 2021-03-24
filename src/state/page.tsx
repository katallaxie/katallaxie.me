import { MdxComponents as components } from '@components/mdx/page/Components'
import { initializeApollo } from '@utils/apollo'
import { PageDocument, PageQuery } from '../generated-types'
import { MultiversalPageHeadProps } from './head'
import { useQuery } from '@apollo/react-hooks'
import React from 'react'
import renderToString from 'next-mdx-remote/render-to-string'
import type { MultiversalPageProps } from '@type/page/MultiversalPageProps'
import type { TComposeFunction } from '@utils/compose'

export type PageQueryResult = PageQuery
export interface PageProviderProps {
  children?: React.ReactNode
  slug?: string
}

const PageContext = React.createContext<PageQueryResult | null>(null)

export const PageProvider = ({
  children,
  slug
}: PageProviderProps): JSX.Element => {
  const queryOptions = {
    variables: {
      slug
    }
  }

  const { data } = useQuery(PageDocument, queryOptions)

  return <PageContext.Provider value={data}>{children}</PageContext.Provider>
}
export const PageConsumer = PageContext.Consumer
export default PageContext

export const getPageStaticProps: TComposeFunction<
  MultiversalPageProps<MultiversalPageHeadProps>
> = async ({ params, ...props }) => {
  const apolloClient = initializeApollo()
  const variables = {
    slug: params?.slug
  }

  const queryOptions = {
    displayName: 'PAGE_QUERY',
    query: PageDocument,
    variables
  }

  const { errors, data } = await apolloClient.query(queryOptions)

  if (errors) {
    console.error(errors)
    throw new Error('Errors were detected in GraphQL query.')
  }

  const mdxSource = await renderToString(data?.page?.content, {
    components,
    provider: { component: PageContext.Provider, props: { value: data } }
  })

  return {
    props: {
      apolloState: apolloClient.cache.extract(),
      isReadyToRender: true,
      isStaticRendering: true,
      mdxSource,
      head: {
        seoTitle: data?.page?.title,
        seoUrl: `https://katallaxie.me/${data?.page?.slug}`,
        seoDescription: data?.page?.description
      }
    }
  }
}
