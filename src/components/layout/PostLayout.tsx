import Content from './PostLayoutContent'
import Footer from './Footer'
import Wrap from './PostLayoutWrap'
import Header from './Header'
import Main from './Main'
import React from 'react'
import usePostContext from '@hooks/usePost'
import Meta from './PostLayoutMeta'

type PostLayoutProps = {
  children?: React.ReactNode
}

const PostLayout = ({ children, ...props }: PostLayoutProps): JSX.Element => {
  const { post } = usePostContext()

  return (
    <>
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
      </Main>
      <Footer />
    </>
  )
}

export default PostLayout
