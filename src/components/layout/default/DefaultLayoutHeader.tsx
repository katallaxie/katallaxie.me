import React, { forwardRef } from 'react'
import Link from 'next/link'
import Logo from '../../../svg/Logo.svg'
import Menu from './DefaultLayoutMenu'
import clsx from 'clsx'

export interface HeaderProps {
  className?: string
  children?: React.ReactNode
}

export const linkStyle = clsx([
  'w-24',
  'block',
  'h-full',
  'transition',
  'transform-gpu'
])

export const HomeLink = forwardRef<HTMLAnchorElement>(({ ...props }, ref) => {
  return (
    <Link href="/" {...props} passHref>
      <a ref={ref} className={linkStyle}>
        <Logo />
      </a>
    </Link>
  )
})

if (process.env.NODE_ENV === 'development') {
  HomeLink.displayName = 'HomeLink'
}

const Header = ({
  className,
  children,
  ...props
}: HeaderProps): JSX.Element => {
  const styles = clsx([], [className])

  return (
    <header className={styles} {...props}>
      {children}
    </header>
  )
}

export default Header
