import React from 'react'
import clsx from 'clsx'

type HomeLayoutMenuProps = {
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

const HomeLayoutMenu = ({
  children,
  ...props
}: HomeLayoutMenuProps): JSX.Element => {
  return (
    <div className={contextStyle} {...props}>
      <nav className="text-gray-700 sticky top-10">
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
          <h2 className="transform-gpu -rotate-90 whitespace-nowrap">
            Say Hi.
          </h2>
        </div>
      </nav>
    </div>
  )
}

export default HomeLayoutMenu
