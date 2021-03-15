import React, { forwardRef } from 'react'
import Link from 'next/link'
import Logo from '../../svg/Logo.svg'
import clsx from 'clsx'
import SayHi from './SayHi'

export interface HeaderProps {
  className?: string
}

export const HomeLink = forwardRef<HTMLAnchorElement>(({ ...props }, ref) => {
  return (
    <Link href="/" {...props} passHref>
      <a ref={ref}>
        <Logo />
      </a>
    </Link>
  )
})

if (process.env.NODE_ENV === 'development') {
  HomeLink.displayName = 'HomeLink'
}

const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const styles = clsx(
    [
      'container',
      'left-0',
      'lg:fixed',
      'lg:px-24',
      'max-w-screen-2xl',
      'md:px-12',
      'mx-auto',
      'px-6',
      'py-16',
      'right-0',
      'xl:px-24',
      'xl:py-24'
    ],
    [className]
  )

  const wrap = clsx(['flex', 'w-full', 'justify-between', 'items-center'])

  return (
    <header className={styles} {...props}>
      <div className={wrap}>
        <HomeLink />
        <SayHi />
      </div>
    </header>
  )
}

export default Header
