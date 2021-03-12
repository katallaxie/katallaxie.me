import Content from './PostLayoutContent'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import React from 'react'
import Teaser from './Teaser'
import usePostContext from '@hooks/usePost'

type PostLayoutProps = {
  children?: React.ReactNode
}

const PostLayout = ({ children, ...props }: PostLayoutProps): JSX.Element => {
  const post = usePostContext()

  return (
    <>
      <Header />
      <Main {...props}>
        <Teaser>{post?.post?.title}</Teaser>
        <Content>{children}</Content>
        <Footer />
      </Main>
    </>
  )
}

export default PostLayout
