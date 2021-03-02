import React from 'react'
import Header from './Header'
import Head from './Head'
import useLayoutContext from '@hooks/useLayout'
import Container from './Container'
import PostList from './PostList'
import PostListItem from './PostListItem'
import PageList from './PageList'
import PageListItem from './PageListItem'

type DefaultLayoutProps = {
  children: React.ReactNode
}

const guardFactory = <T, K extends keyof T, V extends string & T[K]>(
  k: K,
  v: V
): ((o: T) => o is Extract<T, Record<K, V>>) => {
  return (o: T): o is Extract<T, Record<K, V>> => {
    return o[k] === v
  }
}

const DefaultLayout = ({ children }: DefaultLayoutProps): JSX.Element => {
  const { page } = useLayoutContext()
  const pages = page?.refs.filter(guardFactory('__typename', 'Page'))
  const posts = page?.refs.filter(guardFactory('__typename', 'Post'))

  return (
    <>
      <Head {...{ seoTitle: page?.title }} />
      <Header />
      <Container>
        <div className="w-full">
          <div className="md:flex items-stretch w-full md:flex-wrap min-h-screen">
            <div className="flex-none md:w-5/12 lg:w-4/12">
              <PageList>
                {pages.map((page, i) => (
                  <PageListItem key={i} page={page} />
                ))}
              </PageList>
            </div>
            <div className="flex-1">
              <PostList>
                {posts.map((post, i) => (
                  <PostListItem key={i} post={post} />
                ))}
              </PostList>
            </div>
            <div className="absolute bottom-0">Footer</div>
          </div>
        </div>
      </Container>
      <div id="modal-root"></div>
    </>
  )
}

export default DefaultLayout
