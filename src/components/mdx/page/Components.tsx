import dynamic from 'next/dynamic'

import Container from '@components/layout/default/DefaultLayoutContainer'
import Wrap from '@components/layout/default/DefaultLayoutWrap'
import Section from './Section'
import Paragraph from './Paragraph'
import Emphasize from './Emphasize'
import UnorderedList from './UnorderedList'
import UnorderedListItem from './UnorderedListItem'
import Accordion from '@components/accordion/Accordion'
import Header, {
  HomeLink
} from '@components/layout/default/DefaultLayoutHeader'
import AccordionTab from '@components/accordion/AccordionTab'
import type { MdxRenderComponents } from '@components/layout/MdxRenderer'
import {
  H1,
  H2,
  H3,
  H4,
  H5
} from '@components/layout/default/DefaultLayoutHeading'
import Footer from './Footer'

const HomeLayout = dynamic(() => import('../../layout/home/HomeLayout'))
const PageLayout = dynamic(() => import('../../layout/page/PageLayout'))

export const MdxComponents: MdxRenderComponents = {
  Accordion,
  AccordionTab,
  Container,
  em: Emphasize,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  HomeLink,
  header: Header,
  footer: Footer,
  PageLayout,
  HomeLayout,
  p: Paragraph,
  section: Section,
  ul: UnorderedList,
  li: UnorderedListItem,
  Wrap
}

export default MdxComponents
