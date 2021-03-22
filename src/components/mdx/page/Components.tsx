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
import type { MdxRenderComponents } from '@components/layout/MdxRenderer'

export const MdxComponents: MdxRenderComponents = {
  PageLayout,
  HomeLayout,
  Wrap,
  Container,
  Section,
  Paragraph,
  Emphasize,
  UnorderedList,
  UnorderedListItem,
  UnorderedListHeading
}

export default MdxComponents
