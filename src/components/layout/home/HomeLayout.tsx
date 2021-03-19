import React from 'react'
import Header, {
  HomeLink
} from '@components/layout/default/DefaultLayoutHeader'
import useLayoutContext from '@hooks/useLayout'
import DefaultLayout from '@components/layout/default/DefaultLayout'
import Container from '@components/layout/default/DefaultLayoutContainer'
import Wrap from '@components/layout/default/DefaultLayoutWrap'
import PageList from '@components/layout/PageList'
import PostList from '@components/layout/PostList'
import ProjectList from '@components/layout/ProjectList'
import Footer from '@components/layout/Footer'
import { MenuProvider } from '@state/menu'
import { guardFactory } from '@utils/graphql'

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
      <MenuProvider>
        <DefaultLayout>
          <Wrap>
            <Container className="col-span-full lg:col-span-10 xl:col-span-4 px-8 py-24 ">
              <Header>
                <HomeLink />
              </Header>
              <PageList pages={pages} />
            </Container>
            <Container className="col-span-full lg:col-span-10 xl:border-l xl:border-gray-700 xl:col-start-5 py-12 px-8 xl:pr-12 xl:pl-24 xl:col-span-7">
              <PostList posts={posts} />
              <ProjectList projects={links} />
              <Footer />
            </Container>
          </Wrap>
        </DefaultLayout>
      </MenuProvider>
    </>
  )
}

export default HomeLayout
