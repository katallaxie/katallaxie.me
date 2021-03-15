import React from 'react'
import { useModal } from '@components/modal/Modal'
import clsx from 'clsx'

export const buttonStyle = clsx([
  'lg:hidden',
  'rounded-full',
  'bg-white',
  'text-black',
  'px-4',
  'py-1'
])

export const modalStyle = clsx([
  'fixed',
  'flex',
  'justify-center',
  'items-center',
  'bg-black',
  'top-0',
  'bottom-0',
  'right-0',
  'left-0'
])

export const SayHi = (): JSX.Element => {
  const [show, close, Modal] = useModal()
  const handleOpen = () => show()
  const handleClose = () => close()

  return (
    <>
      <button className={buttonStyle} onClick={handleOpen}>
        Say Hi.
      </button>
      <Modal>
        <div className={modalStyle}>
          <div>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default SayHi
