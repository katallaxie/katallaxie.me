import React from 'react'
import Link from 'next/link'
import Container from './Container'
import Logo from '../../svg/Logo.svg'
import clsx from 'clsx'

const headerStyle = clsx(['lg:fixed', 'py-16', 'xl:py-24'])

const Header = (): JSX.Element => {
  return (
    <Container className={headerStyle}>
      <Link href="/">
        <Logo />
      </Link>
    </Container>
  )
}

export default Header
