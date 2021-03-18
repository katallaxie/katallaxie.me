import React from 'react'
import { useModal } from '@components/modal/Modal'
import clsx from 'clsx'
import MotionBox from '@components/animate/MotionBox'
import MotionUnorderedList from '@components/animate/MotionUnorderedList'
import MotionListItem from '@components/animate/MotionListItem'
import ActionButton from '@components/elements/ActionButton'
import { useMenuContext } from '@state/menu'

export const buttonStyle = clsx([
  'border-2',
  'ease-linear',
  'focus:outline-none',
  'font-bold',
  'hover:bg-white',
  'hover:text-black',
  'lg:px-8',
  'lg:text-xl',
  'md:text-lg',
  'motion-safe:animate-zoomIn',
  'px-6',
  'py-1',
  'bg-black',
  'rounded-full',
  'text-white',
  'text',
  'transform-gpu',
  'transition',
  'xl:text-2xl'
])

export const modalStyle = clsx([
  'fixed',
  'flex',
  'justify-center',
  'flex-col',
  'items-center',
  'bg-black',
  'top-0',
  'bottom-0',
  'right-0',
  'left-0'
])

export const menuListStyle = clsx('text-center')
export const menuItemStyle = clsx(['text-4xl', 'p-4'])
export const actionButtonStyle = clsx([
  'text-2xl',
  'p-4',
  'border-t-2',
  'hover:bg-white',
  'hover:text-black',
  'w-full'
])

export const SayHi = (): JSX.Element => {
  const [show, close, Modal] = useModal()
  const handleOpen = () => show()
  const handleClose = () => close()
  const menu = useMenuContext()

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  }

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 }
  }

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren'
      }
    }
  }

  return (
    <>
      <button className={buttonStyle}>Say Hi.</button>
      <Modal>
        <MotionBox
          initial="hidden"
          animate="visible"
          variants={variants}
          className={modalStyle}
        >
          <div className="flex items-center h-full">
            <MotionUnorderedList
              initial="hidden"
              animate="visible"
              variants={list}
              className={menuListStyle}
            >
              {menu?.map((menuItem, i) => (
                <MotionListItem
                  key={i}
                  variants={item}
                  className={menuItemStyle}
                >
                  <a href={menuItem.href}>{menuItem.title}</a>
                </MotionListItem>
              ))}
            </MotionUnorderedList>
          </div>
          <ActionButton
            onClick={handleClose}
            className={actionButtonStyle}
          ></ActionButton>
        </MotionBox>
      </Modal>
    </>
  )
}

export default SayHi
