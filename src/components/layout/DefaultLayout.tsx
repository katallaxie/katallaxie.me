import React from 'react'
import Header from './Header'
import Head from './Head'
import useLayoutContext from '@hooks/useLayout'
import Container from './Container'

type DefaultLayoutProps = {
  children: React.ReactNode
}

function guardFactory<T, K extends keyof T, V extends string & T[K]>(
  k: K,
  v: V
): (o: T) => o is Extract<T, Record<K, V>> {
  return function (o: T): o is Extract<T, Record<K, V>> {
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
      {/* <Container>{children}</Container> */}
      <Container>
        <div className="w-full">
          <div className="md:flex items-stretch w-full md:flex-wrap min-h-screen">
            <div className="flex-none md:w-5/12 lg:w-4/12">
              {pages.map((page, i) => (
                <p key={i}>{page.teaser}</p>
              ))}
            </div>
            <div className="flex-1">Content</div>
            <div className="absolute bottom-0">Footer</div>
          </div>
        </div>
      </Container>
      <div id="modal-root"></div>
    </>
  )
}

export default DefaultLayout
