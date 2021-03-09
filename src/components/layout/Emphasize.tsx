import React from 'react'
import clsx from 'clsx'

export interface EmphasizeProps {
  children?: React.ReactNode
  className?: string
}

export const Emphasize = ({
  children,
  className
}: EmphasizeProps): JSX.Element => {
  const style = clsx(
    ['border-b-2', 'border-yellow-300', 'not-italic'],
    [className]
  )

  return <em className={style}>{children}</em>
}

export default Emphasize
