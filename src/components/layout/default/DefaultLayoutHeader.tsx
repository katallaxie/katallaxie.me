import React, { forwardRef } from 'react'
import Link from 'next/link'
import Logo from '../../../svg/Logo.svg'
import clsx from 'clsx'

export interface HeaderProps {
  className?: string
  children?: React.ReactNode
}

export const linkStyle = clsx([
  'w-20',
  'md:w-24',
  'block',
  'h-full',
  'transition',
  'transform-gpu'
])

export const HomeLink = forwardRef<HTMLAnchorElement>(({ ...props }, ref) => {
  return (
    <Link href="/" {...props} passHref>
      <a ref={ref} className={linkStyle} aria-label="Home">
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
  const styles = clsx(['pb-8', 'md:pb-12'], [className])

  return (
    <header className={styles} {...props}>
      {children}
    </header>
  )
}

export default Header
