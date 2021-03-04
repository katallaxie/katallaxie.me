import React from 'react'
import Link from 'next/link'
import SayHi from './SayHi'
import Container from './Container'
import Logo from '../../svg/Logo.svg'

const Header = (): JSX.Element => {
  return (
    <Container className="fixed">
      <Link href="/">
        <Logo />
      </Link>
      <SayHi />
    </Container>
  )
}

export default Header
