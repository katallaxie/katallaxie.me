import React from 'react'
import Link from 'next/link'

// '1.5rem', md: '2.5rem', xl: '3.5rem'

const Header = (props): JSX.Element => {
  return (
    <div className="container justify-between flex fixed mx-auto left-0 right-0 px-6 md:px-12 lg:px-18 max-w-screen-xl">
      <div>
        <Link href="/">
          <a className="inline-block h-full w-6 bg-white rounded-full"></a>
        </Link>
      </div>
      <div>
        <button>Say Hi</button>
      </div>
    </div>
  )
}

export default Header
