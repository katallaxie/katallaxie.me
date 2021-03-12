import React from 'react'
import { getPostStaticProps, PostProvider } from '@state/post'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { MdxProvider } from '@state/mdx'
import MdxRenderer from '@components/layout/MdxRenderer'
import { OnlyBrowserPageProps } from '@type/page/OnlyBrowserPageProps'
import { SSGPageProps } from '@type/page/SSGPageProps'
import { HeadProvider, MultiversalPageHeadProps } from '@state/head'
import Head from '@components/layout/Head'
import compose from '@utils/compose'
import { MdxComponents as components } from '@components/mdx/Components'

type Props = SSGPageProps<
  Partial<OnlyBrowserPageProps> & Partial<MultiversalPageHeadProps>
>
export const getStaticProps = compose(getPostStaticProps)
export const getStaticPaths = () => ({
  paths: ['/posts/deploy-aws-cloudformation-stacks-with-github-actions'],
  fallback: false
})

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
