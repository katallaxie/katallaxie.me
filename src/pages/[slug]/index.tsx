import React from 'react'
import { getLayoutStaticProps, LayoutProvider } from '@state/layout'
import { MdxProvider } from '@state/mdx'
import { NextPage } from 'next'
import { OnlyBrowserPageProps } from '@type/page/OnlyBrowserPageProps'
import { SSGPageProps } from '@type/page/SSGPageProps'
import { useRouter } from 'next/router'
import { HeadProvider, MultiversalPageHeadProps } from '@state/head'
import Head from '@components/layout/Head'
import compose from '@utils/compose'
import MdxRenderer from '@components/layout/MdxRenderer'

type Props = SSGPageProps<
  Partial<OnlyBrowserPageProps> & Partial<MultiversalPageHeadProps>
>

export const getStaticProps = compose(getLayoutStaticProps)
export const getStaticPaths = () => ({ paths: ['/about'], fallback: false })

const Home: NextPage<Props> = ({ mdxSource, head }): JSX.Element => {
  const { query } = useRouter()

  return (
    <LayoutProvider slug={query.slug as string}>
      <HeadProvider data={head}>
        <Head />
        <MdxProvider source={mdxSource}>
          <MdxRenderer />
        </MdxProvider>
      </HeadProvider>
    </LayoutProvider>
  )
}

export default Home
