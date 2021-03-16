import React from 'react'
import { motion } from 'framer-motion'

export const MotionBox = ({ ...props }): JSX.Element => (
  <motion.div {...props} />
)

export default MotionBox
