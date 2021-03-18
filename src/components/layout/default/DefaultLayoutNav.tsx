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
  const style = clsx(['w-full', 'h-full'], [className])

  return (
    <div className={style}>
      <button className="text-gray-500 hover:text-white flex justify-end w-full h-full hover:text-white py-12 px-6">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth={1}
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
          <h2
            className="transform-gpu -rotate-180 whitespace-nowrap text-4xl py-6 font-semibold"
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
