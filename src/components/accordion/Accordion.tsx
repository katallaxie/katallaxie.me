import React, { useState } from 'react'
import type { AccordionTabProps } from './AccordionTab'

export interface AccordionProps {
  children?: React.ReactNode
  name?: string
}

export const Accordion = ({ children, name }: AccordionProps): JSX.Element => {
  const [tab, setTab] = useState(0)

  const tabs = React.Children.map(
    children,
    (child: React.ReactElement<AccordionTabProps>, idx) => {
      return React.cloneElement(child, {
        idx,
        tab,
        name,
        onChange: () => setTab(idx)
      })
    }
  )

  return <div>{tabs}</div>
}

export default Accordion
