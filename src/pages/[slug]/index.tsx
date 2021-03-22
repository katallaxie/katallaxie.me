import React from 'react'
import { getPageStaticProps, PageProvider } from '@state/page'
import { MdxProvider } from '@state/mdx'
import { MdxComponents as components } from '@components/mdx/page/Components'
import { NextPage } from 'next'
import { ListPagesDocument } from '../../generated-types'
import { initializeApollo } from '@utils/apollo'
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

export const getStaticProps = compose(getPageStaticProps)
export const getStaticPaths = async () => {
  const apolloClient = initializeApollo()

  const queryOptions = {
    displayName: 'LIST_PAGES_QUERY',
    query: ListPagesDocument
  }

  const { errors, data } = await apolloClient.query(queryOptions)

  if (errors) {
    console.error(errors)
    throw new Error('Errors were detected in GraphQL query.')
  }

  const paths = data.pages.map(page => ({ params: { slug: page.slug } }))

  return { paths, fallback: false }
}

const Page: NextPage<Props> = ({ mdxSource, head }): JSX.Element => {
  const { query } = useRouter()

  return (
    <PageProvider slug={query.slug as string}>
      <HeadProvider data={head}>
        <Head />
        <MdxProvider source={mdxSource}>
          <MdxRenderer components={components} />
        </MdxProvider>
      </HeadProvider>
    </PageProvider>
  )
}

export default Page
