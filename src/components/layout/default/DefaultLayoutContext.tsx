import React from 'react'
import clsx from 'clsx'

type DefaultLayoutContextProps = {
  children?: React.ReactNode
  className?: string
}

const DefaultLayoutContext = ({
  children,
  className,
  ...props
}: DefaultLayoutContextProps): JSX.Element => {
  const styles = clsx(
    [
      'col-span-full',
      'md:col-span-2',
      'xl:col-span-1',
      'md:border-r',
      'md:border-gray-700'
    ],
    [className]
  )

  return (
    <div className={styles} {...props}>
      {children}
    </div>
  )
}

export default DefaultLayoutContext
