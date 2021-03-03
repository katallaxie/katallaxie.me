import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

const linkStyle = clsx([
  'block',
  'text-gray-500',
  'text-xl',
  'lg:text-2xl',
  'py-6'
])

export interface PageLinkProps {
  href?: string
  text?: string
}

export const PageLink = ({
  href,
  text = 'Read more'
}: PageLinkProps): JSX.Element => {
  return (
    <Link href={href}>
      <a className={linkStyle}>{text}</a>
    </Link>
  )
}

export default PageLink
