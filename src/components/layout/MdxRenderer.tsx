import React from 'react'
import useMdxContext from '@hooks/useMdx'
import hydrate from 'next-mdx-remote/hydrate'
import { MdxRemote } from 'next-mdx-remote/types'
import { LayoutProvider } from '@state/layout'
import { NormalizedCacheObject } from 'apollo-cache-inmemory'
import HomeLayout from '@components/layout/HomeLayout'
import DefaultLayout from '@components/layout/DefaultLayout'
import Link from 'next/link'
import Footer from './Footer'
import Paragraph from './Paragraph'
import Teaser from './Teaser'
import Emphasize from './Emphasize'
import Wrap from './DefaultLayoutWrap'

export type MdxRenderComponents = MdxRemote.Components

export interface MdxRendererProps {
  client?: any
  children?: React.ReactNode
  components?: MdxRemote.Components
  provider?: MdxRemote.Provider
  slug?: string
  apolloState?: NormalizedCacheObject
}

export const MdxWrappedProvider = (props): React.ReactNode => {
  return <LayoutProvider {...props} />
}
export const MdxProvider = { component: MdxWrappedProvider, props: {} }

export const MdxComponents: MdxRenderComponents = {
  HomeLayout,
  DefaultLayout,
  Wrap,
  Footer,
  Link,
  Teaser,
  Paragraph,
  Emphasize
}

export const MdxRenderer = ({
  components = MdxComponents
}: MdxRendererProps): JSX.Element => {
  const mdx = useMdxContext()

  const content = mdx
    ? hydrate(mdx, {
        components
      })
    : null

  return <>{content}</>
}

export default MdxRenderer
