import React from 'react'
import DefaultFooter from '@components/layout/default/DefaultLayoutFooter'
import Copyright from './Copyright'
import { H2 } from '@components/layout/default/DefaultLayoutHeading'

export const Footer = () => {
  return (
    <DefaultFooter>
      <H2 className="uppercase font-semibold">Happy End.</H2>
      <Copyright />
    </DefaultFooter>
  )
}

export default Footer
