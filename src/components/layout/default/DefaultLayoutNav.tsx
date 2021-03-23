import React from 'react'
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

  const style = clsx(
    ['md:w-full', 'fixed', 'right-0', 'top-0', 'md:relative', 'md:h-full'],
    [className]
  )

  return (
    <aside className={style}>
      <button
        className="focus:outline-none text-gray-500 hover:text-white flex justify-end w-full h-full hover:text-white md:py-12 py-6 px-12 md:px-6"
        onClick={toggle}
      >
        <div>
          {show ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-12 bg-black"
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
              className="w-12 bg-black"
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

          <h2
            className="hidden md:block transform-gpu md:-rotate-180 whitespace-nowrap text-4xl py-6 font-semibold"
            style={{ writingMode: 'vertical-rl' }}
          >
            {children}
          </h2>
        </div>
      </button>
    </aside>
  )
}

export default DefaultLayoutNav
