import React from 'react'
import Header from './Header'
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
import { MenuProvider } from '@state/menu'

interface HomeLayoutProps {
  children?: React.ReactNode
}

const HomeLayout = ({}: HomeLayoutProps): JSX.Element => {
  const { page } = useLayoutContext()

  const pages = page?.refs.filter(guardFactory('__typename', 'Page'))
  const posts = page?.refs.filter(guardFactory('__typename', 'Post'))
  const links = page?.refs.filter(guardFactory('__typename', 'Link'))
  const menuItem = page?.pageMenu?.menu.filter(
    guardFactory('__typename', 'Link')
  )

  return (
    <>
      <MenuProvider data={menuItem}>
        <Header />
        <Container>
          <HomeLayoutWrapper>
            <HomeLayoutContext>
              <PageList pages={pages} />
              <MenuList />
            </HomeLayoutContext>
            <HomeLayoutContent>
              <PostList posts={posts} />
              <ProjectList projects={links} />
              <Footer />
            </HomeLayoutContent>
          </HomeLayoutWrapper>
        </Container>
      </MenuProvider>
      <div id="modal-root"></div>
    </>
  )
}

export default HomeLayout
