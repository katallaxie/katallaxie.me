import React from 'react'
import Link from 'next/link'
import SayHi from './SayHi'
import Container from './Container'

const Header = (): JSX.Element => {
  return (
    <Container>
      <Link href="/">
        <a className="h-6 w-6 lg:h-8 lg:w-8 bg-white rounded-full"></a>
      </Link>
      <SayHi />
    </Container>
  )
}

export default Header
