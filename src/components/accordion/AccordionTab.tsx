import React from 'react'
import clsx from 'clsx'
import { H4 } from '@components/layout/default/DefaultLayoutHeading'

export interface AccordionTabProps {
  children?: React.ReactNode
  idx?: number
  id?: string
  tab?: number
  label?: string
  name?: string
  onChange?: () => void
}

export const AccordionTab = ({
  children,
  idx,
  tab,
  name,
  onChange,
  label
}: AccordionTabProps): JSX.Element => {
  const stylesTab = clsx(['overflow-hidden'], {})
  const stylesInput = clsx(['absolute', 'opacity-0'], {})
  const stylesContent = clsx([
    'overflow-hidden',
    'text-2xl',
    idx !== tab && 'max-h-0 -mb-1',
    idx === tab && 'max-h-screen'
  ])
  const stylesLabel = clsx([
    'cursor-pointer',
    'block',
    'border-t',
    'border-gray-500',
    'border-b',
    'border-gray-500',
    'hover:text-white',
    idx === tab && 'text-white',
    idx !== tab && 'text-gray-500'
  ])

  return (
    <div className={stylesTab}>
      <input
        className={stylesInput}
        id={`${name}+${idx}`}
        name={name}
        type="radio"
        onChange={onChange}
      />
      <label className={stylesLabel} htmlFor={`${name}+${idx}`}>
        <H4 className="py-6">{label}</H4>
      </label>
      <div className={stylesContent}>
        <div className="py-6">{children}</div>
      </div>
    </div>
  )
}

export default AccordionTab
