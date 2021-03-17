import React from 'react'
import clsx from 'clsx'

export interface ActionButtonProps {
  children?: React.ReactNode
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const ActionButton = ({
  children,
  className,
  onClick,
  ...props
}: ActionButtonProps): JSX.Element => {
  const style = clsx([className])

  return (
    <button className={style} onClick={onClick} {...props}>
      {children ?? `Close`}
    </button>
  )
}

export default ActionButton
