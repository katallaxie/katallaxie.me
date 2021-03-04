import React from 'react'
import { LayoutProvider, getLayoutStaticProps } from '@state/layout'
import { MdxProvider } from '@state/mdx'
import { NextPage } from 'next'
import { OnlyBrowserPageProps } from '@type/page/OnlyBrowserPageProps'
import { SSGPageProps } from '@type/page/SSGPageProps'
import { useRouter } from 'next/router'
import compose from '@utils/compose'
import DefaultLayout from '@components/layout/DefaultLayout'

type Props = SSGPageProps<Partial<OnlyBrowserPageProps>>

export const getStaticProps = compose(getLayoutStaticProps)

const Home: NextPage<Props> = ({ mdxSource }): JSX.Element => {
  const { query } = useRouter()

  return (
    <LayoutProvider slug={query.slug as string}>
      <MdxProvider source={mdxSource}>
        <DefaultLayout />
      </MdxProvider>
    </LayoutProvider>
  )
}

export default Home
