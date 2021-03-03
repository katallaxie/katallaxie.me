import React, { useMemo } from 'react'
import Header from './Header'
import Head from './Head'
import useLayoutContext from '@hooks/useLayout'
import Container from './Container'
import PostList from './PostList'
import PostListItem from './PostListItem'
import PageList from './PageList'
import PageListItem from './PageListItem'
import MenuList from './MenuList'
import MenuListItem from './MenuListItem'
import Section from './Section'
import { guardFactory } from '@utils/graphql'

const DefaultLayout = (): JSX.Element => {
  const { page } = useLayoutContext()
  const pages = useMemo(
    () => page?.refs.filter(guardFactory('__typename', 'Page')),
    [page?.refs]
  )
  const posts = useMemo(
    () => page?.refs.filter(guardFactory('__typename', 'Post')),
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
        <div className="w-full">
          <div className="md:flex items-stretch w-full md:flex-wrap min-h-screen">
            <div className="flex-none md:w-5/12 md:pr-12 md:py-48">
              <PageList>
                {pages.map((page, i) => (
                  <PageListItem key={i} page={page} />
                ))}
              </PageList>
            </div>
            <div className="flex-1 md:border-l md:border-gray-800 md:pl-12 md:py-12">
              <Section>Writing.</Section>
              <PostList>
                {posts.map((post, i) => (
                  <PostListItem key={i} post={post} />
                ))}
              </PostList>
              <Section>Projects.</Section>
            </div>
            <div className="absolute bottom-0">
              <MenuList>
                {menuItem.map((item, key) => (
                  <MenuListItem menuItem={item} key={key} />
                ))}
              </MenuList>
            </div>
          </div>
        </div>
      </Container>
      <div id="modal-root"></div>
    </>
  )
}

export default DefaultLayout
