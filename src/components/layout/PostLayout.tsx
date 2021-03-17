import Content from './PostLayoutContent'
import Footer from './Footer'
import Wrap from './PostLayoutWrap'
import Header from './Header'
import Main from './Main'
import React from 'react'
import usePostContext from '@hooks/usePost'
import Meta from './PostLayoutMeta'
import { MenuProvider } from '@state/menu'

type PostLayoutProps = {
  children?: React.ReactNode
}

const PostLayout = ({ children, ...props }: PostLayoutProps): JSX.Element => {
  const { post, menu } = usePostContext()

  return (
    <>
      <MenuProvider data={menu?.menu}>
        <Header />
        <Main {...props}>
          <Wrap>
            <Meta
              createdAt={post?.createdAt}
              tags={post?.tags}
              title={post?.title}
            />
            <Content>{children}</Content>
          </Wrap>
          <Footer />
        </Main>
      </MenuProvider>
      <div id="modal-root"></div>
    </>
  )
}

export default PostLayout
