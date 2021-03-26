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
      'md:pt-0',
      'md:col-span-10',
      'xl:col-span-11',
      'md:overflow-x-auto',
      'md:overflow-y-hidden'
    ],
    [className]
  )

  return (
    <div id="containerDiv" className={styles} {...props}>
      {children}
    </div>
  )
}

export default DefaultLayoutContent
