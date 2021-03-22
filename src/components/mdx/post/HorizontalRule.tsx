import React from 'react'
import clsx from 'clsx'

export interface HorizontalRuleProps {
  className?: string
}

export const HorizontalRule = ({
  className,
  ...props
}: HorizontalRuleProps): JSX.Element => {
  const styles = clsx(['my-6', 'border-2', 'border-gray-900'], [className])

  return <hr className={styles} {...props} />
}

if (process.env.NODE_ENV === 'development') {
  HorizontalRule.displayName = 'HorizonalRule'
}

export default HorizontalRule
