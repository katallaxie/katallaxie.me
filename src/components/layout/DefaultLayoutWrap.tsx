import React from 'react'
import clsx from 'clsx'

type DefaultLayouWrapProps = {
  children: React.ReactNode
}

const wrapStyle = clsx([
  'grid',
  'grid-cols-12',
  'gap-4',
  'lg:py-24',
  'xl:py-36'
])

const DefaultLayoutWrap = ({
  children,
  ...props
}: DefaultLayouWrapProps): JSX.Element => {
  return (
    <main className={wrapStyle} {...props}>
      {children}
    </main>
  )
}

export default DefaultLayoutWrap
