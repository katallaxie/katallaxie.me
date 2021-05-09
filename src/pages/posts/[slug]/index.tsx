import { getPostStaticProps, PostProvider } from '@state/post'
import { HeadProvider, MultiversalPageHeadProps } from '@state/head'
import { MdxComponents as components } from '@components/mdx/post/Components'
import { ListPostsDocument } from '../../../generated-types'
import { initializeApollo } from '@utils/apollo'
import { MdxProvider } from '@state/mdx'
import { NextPage } from 'next'
import { OnlyBrowserPageProps } from '@type/page/OnlyBrowserPageProps'
import { SSGPageProps } from '@type/page/SSGPageProps'
import { useRouter } from 'next/router'
import compose from '@utils/compose'
import Head from '@components/layout/Head'
import MdxRenderer from '@components/layout/MdxRenderer'
import React from 'react'

type Props = SSGPageProps<
  Partial<OnlyBrowserPageProps> & Partial<MultiversalPageHeadProps>
>
export const getStaticProps = compose(getPostStaticProps)
export const getStaticPaths = async () => {
  const apolloClient = initializeApollo()

  const queryOptions = {
    displayName: 'LIST_POSTS_QUERY',
    query: ListPostsDocument
  }

  const { errors, data } = await apolloClient.query(queryOptions)

  if (errors) {
    console.error(errors)
    throw new Error('Errors were detected in GraphQL query.')
  }

  const paths = data.posts.map(post => ({ params: { slug: post.slug } }))

  return { paths, fallback: false }
}

const Post: NextPage<Props> = ({ mdxSource, head }): JSX.Element => {
  const { query } = useRouter()

  return (
    <>
      <PostProvider slug={query.slug as string}>
        <HeadProvider data={head}>
          <Head />
          <MdxProvider source={mdxSource}>
            <MdxRenderer components={components} />
          </MdxProvider>
        </HeadProvider>
      </PostProvider>
    </>
  )
}

export default Post
