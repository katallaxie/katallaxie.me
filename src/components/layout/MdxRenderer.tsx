import React from 'react'
import useMdxContext from '@hooks/useMdx'
import hydrate from 'next-mdx-remote/hydrate'
import { MdxRemote } from 'next-mdx-remote/types'
import { PageProvider } from '@state/page'
import { NormalizedCacheObject } from 'apollo-cache-inmemory'
import HomeLayout from '@components/layout/HomeLayout'
import DefaultLayout from '@components/layout/DefaultLayout'
import Link from 'next/link'
import Footer from './Footer'
import Paragraph from './Paragraph'
import Teaser from './Teaser'
import Emphasize from './Emphasize'
import Wrap from './DefaultLayoutWrap'
import UnorderedList from './UnorderedList'
import UnorderedListItem from './UnorderedListItem'
import UnorderedListHeading from './UnorderedListHeading'
import Section from './Section'

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
  return <PageProvider {...props} />
}
export const MdxProvider = { component: MdxWrappedProvider, props: {} }

export const DefaultComponents: MdxRenderComponents = {
  HomeLayout,
  DefaultLayout,
  Wrap,
  Footer,
  Link,
  Teaser,
  Section,
  Paragraph,
  Emphasize,
  UnorderedList,
  UnorderedListItem,
  UnorderedListHeading
}

export const MdxRenderer = ({
  components = DefaultComponents
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
