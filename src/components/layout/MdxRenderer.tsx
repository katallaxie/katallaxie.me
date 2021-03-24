import React from 'react'
import useMdxContext from '@hooks/useMdx'
import hydrate from 'next-mdx-remote/hydrate'
import { MdxRemote } from 'next-mdx-remote/types'
import HomeLayout from '@components/layout/home/HomeLayout'
import Link from 'next/link'
import Footer from './Footer'
import Paragraph from './Paragraph'
import Emphasize from './Emphasize'

export type MdxRenderComponents = MdxRemote.Components

export const DefaultComponents: MdxRenderComponents = {
  HomeLayout,
  Footer,
  Link,
  Paragraph,
  Emphasize
}

export const MdxComponents: MdxRenderComponents = {}

export interface MdxRendererProps {
  components?: MdxRemote.Components
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
