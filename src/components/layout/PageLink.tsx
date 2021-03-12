import React, { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

export interface PageLinkProps {
  href?: string
  text?: string
  className?: string
}

export const PageLink = forwardRef<HTMLAnchorElement, PageLinkProps>(
  ({ className, href, text = 'Read More', ...props }, ref) => {
    const linkStyle = clsx(
      ['block', 'text-gray-500', 'text-xl', 'lg:text-2xl', 'hover:text-white'],
      className
    )

    return (
      <Link href={href} {...props}>
        <a ref={ref} className={linkStyle}>
          {text}
        </a>
      </Link>
    )
  }
)

if (process.env.NODE_ENV === 'development') {
  PageLink.displayName = 'PageLink'
}

export default PageLink
