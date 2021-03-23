import React from 'react'
import clsx from 'clsx'

export interface FooterProps {
  children?: React.ReactNode
  className?: string
}

const DefaultLayoutFooter = ({
  children,
  className
}: FooterProps): JSX.Element => {
  const footerStyle = clsx(['py-16', 'xl:pt-24', 'text-gray-500'], [className])

  return <footer className={footerStyle}>{children}</footer>
}

export default DefaultLayoutFooter
