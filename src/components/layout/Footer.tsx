import React from 'react'
import clsx from 'clsx'
import Wrap from './PostLayoutWrap'
import Copyright from './Copyright'

export const footerStyle = clsx(['py-16', 'xl:pt-24', 'text-gray-500'])
export const headingStyle = clsx([
  'text-5xl',
  'font-semibold',
  'py-8',
  'col-span-6'
])

const Footer = (): JSX.Element => {
  return (
    <footer className={footerStyle}>
      <Wrap>
        <h3 className={headingStyle}>Good Bye.</h3>
        {/* <MenuList /> */}
        <Copyright />
      </Wrap>
    </footer>
  )
}

export default Footer
