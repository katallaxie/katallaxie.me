import React, { useMemo } from 'react'
import Header from './Header'
import Head from './Head'
import useLayoutContext from '@hooks/useLayout'
import Container from './Container'
import PostList from './PostList'
import PageList from './PageList'
import MenuList from './MenuList'
import ProjectList from './ProjectList'
import { guardFactory } from '@utils/graphql'
import HomeLayoutWrapper from './HomeLayoutWrapper'
import HomeLayoutContext from './HomeLayoutContext'
import HomeLayoutContent from './HomeLayoutContent'
import Footer from './Footer'

interface HomeLayoutProps {
  children?: React.ReactNode
}

const HomeLayout = ({}: HomeLayoutProps): JSX.Element => {
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
        <HomeLayoutWrapper>
          <HomeLayoutContext>
            <PageList pages={pages} />
            <MenuList links={menuItem} />
          </HomeLayoutContext>
          <HomeLayoutContent>
            <PostList posts={posts} />
            <ProjectList projects={links} />
            <Footer />
          </HomeLayoutContent>
        </HomeLayoutWrapper>
      </Container>
      <div id="modal-root"></div>
    </>
  )
}

export default HomeLayout
