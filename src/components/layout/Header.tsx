import React, { forwardRef } from 'react'
import Link from 'next/link'
import Container from './Container'
import Logo from '../../svg/Logo.svg'
import clsx from 'clsx'

export const HomeLink = forwardRef<HTMLAnchorElement>(({ ...props }, ref) => {
  return (
    <Link href="/" {...props} passHref>
      <a ref={ref}>
        <Logo />
      </a>
    </Link>
  )
})

HomeLink.displayName = 'HomeLink'

const headerStyle = clsx(['lg:fixed', 'py-16', 'xl:py-24'])

const Header = (): JSX.Element => {
  return (
    <Container className={headerStyle}>
      <HomeLink />
    </Container>
  )
}

export default Header
