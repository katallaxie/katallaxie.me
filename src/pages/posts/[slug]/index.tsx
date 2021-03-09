import React from 'react'
import { getLayoutStaticProps } from '@state/layout'
import { NextPage } from 'next'
import { OnlyBrowserPageProps } from '@type/page/OnlyBrowserPageProps'
import { SSGPageProps } from '@type/page/SSGPageProps'
import { useRouter } from 'next/router'
import compose from '@utils/compose'

type Props = SSGPageProps<Partial<OnlyBrowserPageProps>>

export const getStaticProps = compose(getLayoutStaticProps)
export const getStaticPaths = () => ({
  paths: ['/posts/test'],
  fallback: false
})

const Post: NextPage<Props> = ({ mdxSource, apolloState }): JSX.Element => {
  const { query } = useRouter()

  return <div>Test</div>
}

export default Post
