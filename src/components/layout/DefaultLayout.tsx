import Content from './DefaultLayoutContent'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import React from 'react'
import Teaser from './Teaser'
import usePageContext from '@hooks/useLayout'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({
  children,
  ...props
}: DefaultLayoutProps): JSX.Element => {
  const page = usePageContext()

  return (
    <>
      <Header />
      <Main {...props}>
        <Teaser>{page?.page?.teaser}</Teaser>
        <Content>{children}</Content>
        <Footer />
      </Main>
    </>
  )
}

export default DefaultLayout
