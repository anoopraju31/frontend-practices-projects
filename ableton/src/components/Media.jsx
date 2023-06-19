import React from 'react'
import { motion} from 'framer-motion'
import mediaImg from '../assets/img/poster-meet-the-makers.avif'
import { textPop } from '../utills/animations'

const Media = () => {
  return (
    <motion.div 
      variants={textPop} 
      initial='start' 
      whileInView='stop'  
      transition={{duration: 1.5}}
      className='w-[83.34vw] xl:w-[1333.44px] mx-auto'
    >
        <img className='w-full h-auto' src={mediaImg} alt="" />
    </motion.div>
  )
}

export default Media