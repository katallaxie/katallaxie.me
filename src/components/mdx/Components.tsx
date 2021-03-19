import { H1, H2, H3 } from './Heading'
import Blockquote from './Blockquote'
import CodeBlock from './CodeBlock'
import DefaultLayout from '@components/layout/post/PostLayout'
import Link from './Link'
import Paragraph from './Paragraph'
import UnorderedList from './UnorderedList'
import OrderedList from './OrderedList'
import HorizontalRule from './HorizontalRule'
import Image from './Image'
import type { MdxRenderComponents } from '@components/layout/MdxRenderer'

export const MdxComponents: MdxRenderComponents = {
  DefaultLayout,
  p: Paragraph,
  blockquote: Blockquote,
  code: CodeBlock,
  img: Image,
  ul: UnorderedList,
  ol: OrderedList,
  hr: HorizontalRule,
  a: Link,
  h1: H1,
  h2: H2,
  h3: H3
}

export default MdxComponents
