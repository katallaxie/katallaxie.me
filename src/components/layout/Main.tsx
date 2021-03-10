import React from 'react'
import clsx from 'clsx'

type MainProps = {
  children?: React.ReactNode
  className?: string
}

const Main = ({ children, className, ...props }: MainProps): JSX.Element => {
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
    <main className={styles} {...props}>
      {children}
    </main>
  )
}

export default Main
