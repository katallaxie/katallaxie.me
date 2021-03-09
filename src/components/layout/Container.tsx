import React from 'react'
import clsx from 'clsx'

type ContainerProps = {
  children?: React.ReactNode
  className?: string
}

const Container = ({
  children,
  className,
  ...props
}: ContainerProps): JSX.Element => {
  const styles = clsx(
    [
      'container',
      'left-0',
      'lg:px-24',
      'max-w-screen-2xl',
      'md:px-12',
      'mx-auto',
      'px-6',
      'right-0',
      'xl:px-24'
    ],
    [className]
  )

  return (
    <div className={styles} {...props}>
      {children}
    </div>
  )
}

export default Container
