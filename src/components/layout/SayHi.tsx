import React from 'react'
import { useModal } from '@components/modal/Modal'
import clsx from 'clsx'
import MotionBox from '@components/animate/MotionBox'
import MotionUnorderedList from '@components/animate/MotionUnorderedList'
import MotionListItem from '@components/animate/MotionListItem'

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
  const [show, close, Modal, isVisible] = useModal()
  const handleOpen = () => show()
  const handleClose = () => close()

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  }

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 }
  }

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  }

  return (
    <>
      <button className={buttonStyle} onClick={handleOpen}>
        Say Hi.
      </button>
      <Modal>
        <MotionBox
          initial="hidden"
          animate="visible"
          variants={variants}
          className={modalStyle}
        >
          <div>
            <MotionUnorderedList
              initial="hidden"
              animate="visible"
              variants={list}
            >
              <MotionListItem variants={item}>
                <a href="">GithUb</a>
              </MotionListItem>
              <MotionListItem variants={item}>
                <a href="">GithUb</a>
              </MotionListItem>
              <MotionListItem variants={item}>
                <a href="">GithUb</a>
              </MotionListItem>
              <MotionListItem variants={item}>
                <a href="">GithUb</a>
              </MotionListItem>
            </MotionUnorderedList>
            <button onClick={handleClose}>Close</button>
          </div>
        </MotionBox>
      </Modal>
    </>
  )
}

export default SayHi
