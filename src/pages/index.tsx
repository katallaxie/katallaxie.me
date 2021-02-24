import React from 'react'
import { GetStaticProps } from 'next'
import { CommonServerSideParams } from '@type/nextjs/CommonServerSideParams'
import { NextPage } from 'next'
import DefaultLayout from '@components/layout/DefaultLayout'
import { SSGPageProps } from '@type/page/SSGPageProps'
import { OnlyBrowserPageProps } from '@type/page/OnlyBrowserPageProps'
import { getCommonStaticProps } from '@utils/nextjs/SSG'
import MdxRenderer from '@components/layout/MdxRenderer'
import useLayoutContext from '@hooks/useLayout'

type Props = SSGPageProps<Partial<OnlyBrowserPageProps>>

export const getStaticProps: GetStaticProps<
  SSGPageProps,
  CommonServerSideParams
> = getCommonStaticProps

const Home: NextPage<Props> = (): JSX.Element => {
  const layout = useLayoutContext()

  return (
    <DefaultLayout>
      <MdxRenderer layout={layout} />
    </DefaultLayout>
  )
}

export default Home
