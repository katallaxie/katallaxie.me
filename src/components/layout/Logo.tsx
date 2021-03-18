import React from 'react'

export const Logo = (): JSX.Element => {
  return (
    <svg version="1.1" viewBox="0 0 84 24" xmlns="http://www.w3.org/2000/svg">
      <g
        id="Welcome"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Desktop" transform="translate(-91.000000, -59.000000)">
          <g id="Logo" transform="translate(91.000000, 59.000000)">
            <circle id="Oval" fill="#FFCA09" cx="12" cy="12" r="12"></circle>
            <polygon
              id="Triangle"
              fill="#3077F8"
              points="41 0 53 24 29 24"
            ></polygon>
            <rect
              id="Rectangle"
              fill="#E51D1D"
              x="60"
              y="0"
              width="24"
              height="24"
            ></rect>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Logo
