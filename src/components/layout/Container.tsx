import React from 'react'
import clsx from 'clsx'

type ContainerProps = {
  children: React.ReactNode
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
      'items-center',
      'justify-between',
      'flex mx-auto',
      'left-0',
      'py-12',
      'lg:py-24',
      'px-6',
      'md:px-12',
      'lg:px-24',
      'xl:px-24',
      'right-0',
      'max-w-screen-xl'
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
