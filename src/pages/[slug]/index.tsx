import React from 'react'
import { getLayoutStaticProps, LayoutProvider } from '@state/layout'
import { MdxProvider } from '@state/mdx'
import { NextPage } from 'next'
import { OnlyBrowserPageProps } from '@type/page/OnlyBrowserPageProps'
import { SSGPageProps } from '@type/page/SSGPageProps'
import { useRouter } from 'next/router'
import compose from '@utils/compose'
import MdxRenderer from '@components/layout/MdxRenderer'

type Props = SSGPageProps<Partial<OnlyBrowserPageProps>>

export const getStaticProps = compose(getLayoutStaticProps)
export const getStaticPaths = () => ({ paths: ['/about'], fallback: false })

const Home: NextPage<Props> = ({ mdxSource }): JSX.Element => {
  const { query } = useRouter()

  return (
    <LayoutProvider slug={query.slug as string}>
      <MdxProvider source={mdxSource}>
        <MdxRenderer />
      </MdxProvider>
    </LayoutProvider>
  )
}

export default Home
