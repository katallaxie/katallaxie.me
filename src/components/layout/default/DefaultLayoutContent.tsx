import React from 'react'
import clsx from 'clsx'

type DefaultLayoutContentProps = {
  children?: React.ReactNode
  className?: string
}

const DefaultLayoutContent = ({
  children,
  className,
  ...props
}: DefaultLayoutContentProps): JSX.Element => {
  const styles = clsx(
    [
      'col-span-full',
      'md:mt-0',
      'md:col-span-10',
      'xl:col-span-11',
      'md:overflow-y-auto'
    ],
    [className]
  )

  return (
    <div className={styles} {...props}>
      {children}
    </div>
  )
}

export default DefaultLayoutContent
