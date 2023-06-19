import React from 'react'
import { delay, motion} from 'framer-motion'
import { expand } from '../utills/animations'

const HeroSection = () => {
  return (
    <motion.div
      variants={expand}
      initial='shrink'
      animate='enlarge'
      transition={{duration: 1.5}}
      className='mx-[8.33vw] min-h-[var(--hero-section-height)] bg-no-repeat bg-cover bg-pos bg-hero-image flex justify-center items-center'
    >
      <motion.h1 initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 1.5, duration: 0.5}} className='text-red-500 text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-medium'> Ableton </motion.h1>
    </motion.div>
  )
}

export default HeroSection