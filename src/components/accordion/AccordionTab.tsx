import React, { useState } from 'react'
import clsx from 'clsx'

export interface AccordionTabProps {
  children?: React.ReactNode
  idx?: number
  tab?: number
  label?: string
  name?: string
  nameId?: string
  onChange?: () => void
}

export const AccordionTab = ({
  children,
  idx,
  tab,
  name,
  nameId,
  onChange,
  label
}: AccordionTabProps): JSX.Element => {
  const stylesTab = clsx(['overflow-hidden'], {})
  const stylesInput = clsx(['absolute', 'opacity-0'], {})
  const stylesContent = clsx(
    ['overflow-hidden', 'transition-all', 'duration-200'],
    {
      'max-h-0': idx !== tab,
      'max-h-screen': idx === tab
    }
  )
  const stylesLabel = clsx([
    'cursor-pointer',
    'py-6',
    'block',
    'border-t',
    'border-gray-500'
  ])

  return (
    <div className={stylesTab}>
      <input
        className={stylesInput}
        id={nameId}
        type="radio"
        name={name}
        onChange={onChange}
      />
      <label className={stylesLabel} htmlFor={nameId}>
        <h3>{label}</h3>
      </label>
      <div className={stylesContent}>
        <div className="py-6">{children}</div>
      </div>
    </div>
  )
}

export default AccordionTab
