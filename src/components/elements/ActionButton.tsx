import React from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export const ActionButton = ({ ...props }): JSX.Element => {
  const style = clsx([props.className])

  return (
    <motion.button className={style} {...props}>
      {props.children ?? `Close`}
    </motion.button>
  )
}

export default ActionButton
