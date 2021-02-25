import React from 'react'
import Link from 'next/link'
import { useModal } from '@components/modal/Modal'

// '1.5rem', md: '2.5rem', xl: '3.5rem'

const Header = (props): JSX.Element => {
  const [show, close, Modal] = useModal()
  const handleOpen = () => show()
  const handleClose = () => close()

  return (
    <div className="container items-center justify-between flex fixed mx-auto left-0 py-12 lg:py-24 px-6 md:px-12 lg:px-24 xl:px-24 right-0 max-w-screen-xl">
      <Link href="/">
        <a className="h-6 w-6 lg:h-8 lg:w-8 bg-white rounded-full"></a>
      </Link>
      <div>
        <button className="text-lg md:text-xl lg:text-2xl" onClick={handleOpen}>
          Say Hi.
        </button>
        <Modal>
          <div className="">Your Modal</div>
          <button onClick={handleClose}>Close</button>
        </Modal>
      </div>
    </div>
  )
}

export default Header
