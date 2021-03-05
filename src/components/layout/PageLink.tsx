import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

export interface PageLinkProps {
  href?: string
  text?: string
  className?: string
}

export const PageLink = ({
  href,
  text = 'Read more',
  className,
  ...props
}: PageLinkProps): JSX.Element => {
  const linkStyle = clsx(
    ['block', 'text-gray-500', 'text-xl', 'lg:text-2xl', 'hover:text-white'],
    className
  )

  return (
    <Link href={href} {...props}>
      <a className={linkStyle}>{text}</a>
    </Link>
  )
}

export default PageLink
