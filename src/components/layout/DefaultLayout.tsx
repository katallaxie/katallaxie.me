import React from 'react'
import Header from './Header'
import Footer from './Footer'
import useLayoutContext from '@hooks/useLayout'
import Container from './Container'
import Teaser from './Teaser'
import Wrap from './DefaultLayoutWrap'
import Content from './DefaultLayoutContent'

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
      <Container {...props}>
        <Wrap>
          <Teaser>{layout?.page?.teaser}</Teaser>
          <Content>{children}</Content>
        </Wrap>
        <Footer />
      </Container>
    </>
  )
}

export default DefaultLayout
