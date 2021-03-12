import { getPostStaticProps, PostProvider } from '@state/post'
import { HeadProvider, MultiversalPageHeadProps } from '@state/head'
import { MdxComponents as components } from '@components/mdx/Components'
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
