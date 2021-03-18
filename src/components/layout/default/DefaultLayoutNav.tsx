import React from 'react'
import clsx from 'clsx'

export interface DefaultLayoutNavProps {
  className?: string
  children?: React.ReactNode
}

export const DefaultLayoutNav = ({
  className,
  children
}: DefaultLayoutNavProps): JSX.Element => {
  const style = clsx(
    ['md:w-full', 'fixed', 'right-0', 'top-0', 'md:relative', 'md:h-full'],
    [className]
  )

  return (
    <div className={style}>
      <button className="focus:outline-none, text-gray-500 hover:text-white flex justify-end w-full h-full hover:text-white md:py-12 py-6 px-6">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-12"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth={1}
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
          <h2
            className="hidden md:block transform-gpu md:-rotate-180 whitespace-nowrap text-4xl py-6 font-semibold"
            style={{ writingMode: 'vertical-rl' }}
          >
            {children}
          </h2>
        </div>
      </button>
    </div>
  )
}

export default DefaultLayoutNav
