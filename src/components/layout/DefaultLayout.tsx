import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Head from './Head'
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
      <Head {...{ seoTitle: layout?.page.title }} />
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default DefaultLayout
