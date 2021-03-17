import React from 'react'
import clsx from 'clsx'
import Wrap from './PostLayoutWrap'
import MenuList from './MenuList'
import Copyright from './Copyright'

export const footerStyle = clsx(['py-16', 'xl:pt-24', 'text-gray-500'])
export const headingStyle = clsx([
  'lg:hidden',
  'text-3xl',
  'py-8',
  'col-span-6'
])

const Footer = (): JSX.Element => {
  return (
    <footer className={footerStyle}>
      <Wrap>
        <h3 className={headingStyle}>Good bye.</h3>
        <MenuList className={'lg:hidden'} />
        <Copyright />
      </Wrap>
    </footer>
  )
}

export default Footer
