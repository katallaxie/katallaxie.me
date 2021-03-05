import React, { useMemo } from 'react'
import Header from './Header'
import Head from './Head'
import useLayoutContext from '@hooks/useLayout'
import Container from './Container'
import PostList from './PostList'
import PageList from './PageList'
import PageListItem from './PageListItem'
import MenuList from './MenuList'
import MenuListItem from './MenuListItem'
import ProjectList from './ProjectList'
import ProjectListItem from './ProjectListItem'
import Section from './Section'
import { guardFactory } from '@utils/graphql'
import DefaultLayoutWrapper from './DefaultLayoutWrapper'
import DefaultLayoutContext from './DefaultLayoutContext'
import DefaultLayoutContent from './DefaultLayoutContent'

interface DefaultLayoutProps {
  children?: React.ReactNode
}

const DefaultLayout = ({}: DefaultLayoutProps): JSX.Element => {
  const { page } = useLayoutContext()
  const pages = useMemo(
    () => page?.refs.filter(guardFactory('__typename', 'Page')),
    [page?.refs]
  )

  const posts = useMemo(
    () => page?.refs.filter(guardFactory('__typename', 'Post')),
    [page?.refs]
  )

  const links = useMemo(
    () => page?.refs.filter(guardFactory('__typename', 'Link')),
    [page?.refs]
  )

  const menuItem = useMemo(
    () => page?.pageMenu?.menu.filter(guardFactory('__typename', 'Link')),
    [page?.refs]
  )

  return (
    <>
      <Head {...{ seoTitle: page?.title }} />
      <Header />
      <Container>
        <DefaultLayoutWrapper>
          <DefaultLayoutContext>
            <PageList pages={pages} />
          </DefaultLayoutContext>
          <DefaultLayoutContent>
            <PostList posts={posts} />
            <ProjectList projects={links} />
          </DefaultLayoutContent>
        </DefaultLayoutWrapper>
      </Container>
      <div id="modal-root"></div>
    </>
  )
}

export default DefaultLayout
