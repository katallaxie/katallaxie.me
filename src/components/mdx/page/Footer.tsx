import React from 'react'
import DefaultFooter from '@components/layout/default/DefaultLayoutFooter'
import Copyright from './Copyright'
import { H2 } from '@components/layout/default/DefaultLayoutHeading'

export const Footer = (): JSX.Element => {
  const scrollTop = () => {
    const myDiv = document.getElementById('containerDiv')
    myDiv.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <DefaultFooter>
      <button onClick={scrollTop} className="flex flex-col focus:outline-none">
        <H2 className="uppercase font-semibold">BACK TOP.</H2>
      </button>
      <Copyright />
    </DefaultFooter>
  )
}

export default Footer
