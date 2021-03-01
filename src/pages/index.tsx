import React from 'react'
import { NextPage } from 'next'
import DefaultLayout from '@components/layout/DefaultLayout'
import { SSGPageProps } from '@type/page/SSGPageProps'
import { OnlyBrowserPageProps } from '@type/page/OnlyBrowserPageProps'
import { getCommonStaticProps } from '@utils/nextjs/SSG'
import compose from '@utils/compose'
import { LayoutProvider } from '@state/layout'
import { MdxProvider } from '@state/mdx'
import MdxRenderer from '@components/layout/MdxRenderer'
import useLayoutContext from '@hooks/useLayout'
import { useRouter } from 'next/router'

type Props = SSGPageProps<Partial<OnlyBrowserPageProps>>

export const getStaticProps = compose([getCommonStaticProps])

const Home: NextPage<Props> = ({ mdxSource }): JSX.Element => {
  const layout = useLayoutContext()
  const { query } = useRouter()

  return (
    <LayoutProvider slug={query.slug as string}>
      <MdxProvider source={mdxSource}>
        <DefaultLayout>
          <MdxRenderer layout={layout} />
        </DefaultLayout>
      </MdxProvider>
    </LayoutProvider>
  )
}

export default Home
