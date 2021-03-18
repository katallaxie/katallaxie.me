import React from 'react'
import clsx from 'clsx'

type DefaultLayoutMenuProps = {
  children?: React.ReactNode
}

const contextStyle = clsx([
  'mx-auto',
  'w-6/12',
  'border-l-2',
  'border-r-2',
  'p-2',
  'border-gray-700'
])

const DefaultLayoutMenu = ({
  children,
  ...props
}: DefaultLayoutMenuProps): JSX.Element => {
  return (
    <nav
      className="fixed h-screen top-0 bottom-0 left-0 border-r-2 border-gray-700 px-2 py-12 w-16 motion-safe:animate-slideInLeft"
      {...props}
    >
      <div className="flex flex-col justify-spacebetween items-center h-full text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          shapeRendering="geometricPrecision"
          className="mb-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
        <h2 className="transform-gpu -rotate-90 translate-y-full text-4xl font-bold whitespace-nowrap">
          Say Hi.
        </h2>
      </div>
    </nav>
  )
}

export default DefaultLayoutMenu
