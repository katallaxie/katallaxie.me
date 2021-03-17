import React from 'react'
import clsx from 'clsx'

export interface CopyrightProps {
  className?: string
}

const Copyright = ({ className, ...props }: CopyrightProps): JSX.Element => {
  const style = clsx(['col-span-full'], [className])
  const date = new Date()
  const formatDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric'
  }).format(date)

  return (
    <p className={style} {...props}>
      Copyright &copy; {formatDate}. All rights reserved 🤘.
    </p>
  )
}

export default Copyright
