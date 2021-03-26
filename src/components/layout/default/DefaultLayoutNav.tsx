import React, { useRef } from 'react'
import clsx from 'clsx'
import { useMenuContext } from '@state/menu'

export interface DefaultLayoutNavProps {
  className?: string
  children?: React.ReactNode
}

export const DefaultLayoutNav = ({
  className,
  children
}: DefaultLayoutNavProps): JSX.Element => {
  const { toggle, show } = useMenuContext()
  const buttonEl = useRef(null)

  const style = clsx(
    ['w-full', 'h-full', 'flex', 'justify-start', 'md:justify-end'],
    [className]
  )

  return (
    <aside className={style}>
      <button
        className="focus:outline-none text-gray-500 hover:text-white w-full md:w-min md:flex h-full hover:text-white md:py-12 py-6 px-6"
        ref={buttonEl}
        onClick={toggle}
      >
        <div className="w-full flex flex-row-reverse md:block justify-between">
          {show ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-10 m-3 md:m-0 bg-black"
            >
              <path
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeWidth={1}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-10 m-3 md:m-0 bg-black"
            >
              <path
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeWidth={1}
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          )}
          {}

          <h2 className="transform-gpu hidden md:block md:-rotate-180 whitespace-nowrap text-3xl md:text-4xl py-6 font-semibold md:vertical-rl">
            {children}
          </h2>
        </div>
      </button>
    </aside>
  )
}

export default DefaultLayoutNav
