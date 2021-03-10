import Content from './DefaultLayoutContent'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import React from 'react'
import Teaser from './Teaser'
import useLayoutContext from '@hooks/useLayout'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({
  children,
  ...props
}: DefaultLayoutProps): JSX.Element => {
  const layout = useLayoutContext()

  return (
    <>
      <Header />
      <Main {...props}>
        <Teaser>{layout?.page?.teaser}</Teaser>
        <Content>{children}</Content>
        <Footer />
      </Main>
    </>
  )
}

export default DefaultLayout
