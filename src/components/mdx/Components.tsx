import type { MdxRenderComponents } from '@components/layout/MdxRenderer'
import DefaultLayout from '@components/layout/PostLayout'
import Paragraph from './Paragraph'
import { H1, H2, H3 } from './Heading'
import CodeBlock from './CodeBlock'
import Link from './Link'

export const MdxComponents: MdxRenderComponents = {
  DefaultLayout,
  p: Paragraph,
  code: CodeBlock,
  a: Link,
  h1: H1,
  h2: H2,
  h3: H3
}

export default MdxComponents
