import PageLayout from '@components/layout/page/PageLayout'
import Container from '@components/layout/default/DefaultLayoutContainer'
import Wrap from '@components/layout/default/DefaultLayoutWrap'
import Section from './Section'
import Paragraph from './Paragraph'
import Emphasize from './Emphasize'
import UnorderedList from './UnorderedList'
import UnorderedListItem from './UnorderedListItem'
import UnorderedListHeading from './UnorderedListHeading'
import HomeLayout from '@components/layout/home/HomeLayout'
import Accordion from '@components/accordion/Accordion'
import AccordionTab from '@components/accordion/AccordionTab'
import type { MdxRenderComponents } from '@components/layout/MdxRenderer'
import { H1, H2, H3 } from '@components/mdx/post/Heading'

export const MdxComponents: MdxRenderComponents = {
  PageLayout,
  HomeLayout,
  Accordion,
  AccordionTab,
  Wrap,
  Container,
  Section,
  Paragraph,
  Emphasize,
  UnorderedList,
  UnorderedListItem,
  UnorderedListHeading,
  H1,
  H2,
  H3
}

export default MdxComponents
