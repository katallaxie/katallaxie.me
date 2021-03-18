import React from 'react'
import clsx from 'clsx'

type DefaultLayoutContainerProps = {
  children?: React.ReactNode
  className?: string
}

const DefaultLayoutContainer = ({
  children,
  className,
  ...props
}: DefaultLayoutContainerProps): JSX.Element => {
  const styles = clsx([], [className])

  return (
    <div className={styles} {...props}>
      {children}
    </div>
  )
}

export default DefaultLayoutContainer
