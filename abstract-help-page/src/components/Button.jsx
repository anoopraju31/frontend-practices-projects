import React from 'react'
import { motion } from 'framer-motion'
import { reveal } from '../utills/animations'

const Button = ({outlined, text}) => {
  return (
    <motion.div 
      variants={reveal} 
      initial="hiddenRightVariant"
      animate="revealedVariant"
      transition={{ duration: 1}} 
      className={`px-6 py-2 text-white font-medium rounded-lg ${outlined? 'border-2 border-white' : 'bg-[#4C5FD5] hover:bg-white hover:text-black'}`}> {text} </motion.div>
  )
}

export default Button