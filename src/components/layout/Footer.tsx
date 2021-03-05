import React from 'react'
import clsx from 'clsx'

const footerStyle = clsx(['pt-16', 'xl:pt-24', 'text-gray-500'])

const Footer = (): JSX.Element => {
  const date = new Date()
  const formatDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric'
  }).format(date)

  return (
    <footer className={footerStyle}>
      <p>Copyright &copy; {formatDate}. All rights reserved 🤘.</p>
    </footer>
  )
}

export default Footer
