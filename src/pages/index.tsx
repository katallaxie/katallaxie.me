import React from 'react'
import { getLayoutStaticProps } from '@state/layout'
import { MdxProvider } from '@state/mdx'
import { NextPage } from 'next'
import { OnlyBrowserPageProps } from '@type/page/OnlyBrowserPageProps'
import { SSGPageProps } from '@type/page/SSGPageProps'
import compose from '@utils/compose'
import MdxRenderer from '@components/layout/MdxRenderer'

type Props = SSGPageProps<Partial<OnlyBrowserPageProps>>

export const getStaticProps = compose(getLayoutStaticProps)

const Home: NextPage<Props> = ({ mdxSource, apolloState }): JSX.Element => {
  return (
    <MdxProvider source={mdxSource}>
      <MdxRenderer apolloState={apolloState} />
    </MdxProvider>
  )
}

export default Home
