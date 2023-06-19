import React from 'react'
import { motion } from 'framer-motion'
import { textPop } from '../utills/animations'

const Icon = ({id, background, link, MediaIcon}) => {
  return (
    <motion.div 
      variants={textPop} 
      initial='start' 
      whileInView='stop' 
      transition={{duration: 1, delay: 0.1 + (id * 0.2)   }} 
      className={`p-2 text-2xl ${background} text-white`}
    >
      <a href={link}>
        {MediaIcon}
      </a>
    </motion.div>
  )
}

export default Icon