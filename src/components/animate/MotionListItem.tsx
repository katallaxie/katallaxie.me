import React from 'react'
import { motion } from 'framer-motion'

export const MotionListItem = ({ ...props }): JSX.Element => (
  <motion.li {...props} />
)

export default MotionListItem
