import { MdxComponents as components } from '@components/mdx/post/Components'
import { initializeApollo } from '@utils/apollo'
import { PostDocument, PostQuery } from '../generated-types'
import { MultiversalPageHeadProps } from './head'
import { useQuery } from '@apollo/react-hooks'
import React from 'react'
import renderToString from 'next-mdx-remote/render-to-string'
import type { MultiversalPageProps } from '@type/page/MultiversalPageProps'
import type { TComposeFunction } from '@utils/compose'

export type PostQueryResult = PostQuery
export interface PostProviderProps {
  children?: React.ReactNode
  slug?: string
}

const PostContext = React.createContext<PostQueryResult | null>(null)

export const PostProvider = ({
  children,
  slug
}: PostProviderProps): JSX.Element => {
  const queryOptions = {
    variables: {
      slug
    }
  }

  const { data } = useQuery(PostDocument, queryOptions)

  return <PostContext.Provider value={data}>{children}</PostContext.Provider>
}
export const PostConsumer = PostContext.Consumer
export default PostContext

export const getPostStaticProps: TComposeFunction<
  MultiversalPageProps<MultiversalPageHeadProps>
> = async ({ params }) => {
  const apolloClient = initializeApollo()
  const variables = {
    slug: params?.slug
  }

  const queryOptions = {
    displayName: 'POST_QUERY',
    query: PostDocument,
    variables
  }

  const { errors, data } = await apolloClient.query(queryOptions)

  if (errors) {
    console.error(errors)
    throw new Error('Errors were detected in GraphQL query.')
  }

  const mdxSource = await renderToString(data?.post?.content, {
    components,
    provider: { component: PostContext.Provider, props: { value: data } }
  })

  return {
    props: {
      apolloState: apolloClient.cache.extract(),
      isReadyToRender: true,
      isStaticRendering: true,
      mdxSource,
      head: {
        seoTitle: data?.post?.title
      }
    }
  }
}
