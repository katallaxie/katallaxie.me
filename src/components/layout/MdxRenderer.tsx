import React from 'react'
import useMdxContext from '@hooks/useMdx'
import hydrate from 'next-mdx-remote/hydrate'
import { MdxRemote } from 'next-mdx-remote/types'
import LayoutContext from '@state/layout'

export type MdxRenderComponents = MdxRemote.Components

export interface MdxRendererProps {
  components?: MdxRemote.Components
  provider?: MdxRemote.Provider
  layout?: any
}

export const MdxWrappedProvider = ({
  theme,
  layout,
  ...props
}): React.ReactNode => {
  return <LayoutContext.Provider value={layout} {...props} />
}
export const MdxProvider = { component: MdxWrappedProvider, props: {} }

export const MdxComponents: MdxRenderComponents = {}

export const MdxRenderer = ({
  components = MdxComponents,
  layout
}: MdxRendererProps): JSX.Element => {
  const mdx = useMdxContext()

  const content = mdx
    ? hydrate(mdx, {
        components,
        provider: { component: MdxWrappedProvider, props: { layout } }
      })
    : null

  return <>{content}</>
}

export default MdxRenderer
