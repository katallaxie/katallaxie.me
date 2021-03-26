import React from 'react'
import Header, {
  HomeLink
} from '@components/layout/default/DefaultLayoutHeader'
import Meta from './PostLayoutMeta'
import usePostContext from '@hooks/usePost'
import DefaultLayout from '@components/layout/default/DefaultLayout'
import Container from '@components/layout/default/DefaultLayoutContainer'
import Wrap from '@components/layout/default/DefaultLayoutWrap'
import Content from './PostLayoutContent'
import Footer from '@components/mdx/page/Footer'
import { MenuProvider } from '@state/menu'

interface PostLayoutProps {
  children?: React.ReactNode
}

const PostLayout = ({ children, ...props }: PostLayoutProps): JSX.Element => {
  const { post, menu } = usePostContext()

  return (
    <>
      <MenuProvider items={menu.menu}>
        <DefaultLayout {...props}>
          <Wrap>
            <Container className="col-span-full xl:col-span-8 px-8 md:py-24">
              <Header>
                <HomeLink />
              </Header>
              <Meta
                createdAt={post?.createdAt}
                tags={post?.tags}
                title={post?.title}
              />
              <Content>{children}</Content>
              <Footer />
            </Container>
          </Wrap>
        </DefaultLayout>
      </MenuProvider>
    </>
  )
}

export default PostLayout
