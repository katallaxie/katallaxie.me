import React from 'react'
import { LayoutProvider, getLayoutStaticProps } from '@state/layout'
import { MdxProvider } from '@state/mdx'
import { NextPage } from 'next'
import { OnlyBrowserPageProps } from '@type/page/OnlyBrowserPageProps'
import { SSGPageProps } from '@type/page/SSGPageProps'
import { useRouter } from 'next/router'
import hydrate from 'next-mdx-remote/hydrate'
import compose from '@utils/compose'
import path from 'path'

const components = {}

type Props = SSGPageProps<Partial<OnlyBrowserPageProps>>

export const getStaticProps = compose(getLayoutStaticProps)

const About: NextPage<Props> = ({ mdxSource }): JSX.Element => {
  const { route } = useRouter()
  const content = mdxSource ? hydrate(mdxSource, { components }) : null

  return (
    <LayoutProvider slug={path.basename(route) as string}>
      <MdxProvider source={mdxSource}>{content}</MdxProvider>
    </LayoutProvider>
  )
}

export default About
