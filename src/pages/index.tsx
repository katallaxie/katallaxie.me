import React from 'react'
import { getLayoutStaticProps, LayoutProvider } from '@state/layout'
import { MdxProvider } from '@state/mdx'
import { NextPage } from 'next'
import { OnlyBrowserPageProps } from '@type/page/OnlyBrowserPageProps'
import { SSGPageProps } from '@type/page/SSGPageProps'
import compose from '@utils/compose'
import MdxRenderer from '@components/layout/MdxRenderer'

type Props = SSGPageProps<Partial<OnlyBrowserPageProps>>

export const getStaticProps = compose(getLayoutStaticProps)

const Home: NextPage<Props> = ({ mdxSource }): JSX.Element => {
  return (
    <>
      <LayoutProvider>
        <MdxProvider source={mdxSource}>
          <MdxRenderer />
        </MdxProvider>
      </LayoutProvider>
    </>
  )
}

export default Home
