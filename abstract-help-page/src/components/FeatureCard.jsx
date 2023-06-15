import React from 'react'
import { motion } from 'framer-motion' 
import { HiArrowLongRight } from 'react-icons/hi2'
import { reveal, show } from '../utills/animations'

const FeatureCard = ({id, image, title, description}) => {
  return (
    <motion.section 
        variants={reveal}
        initial='hiddenLeftVariant'
        whileInView='revealedVariant'
        transition={{duration: 1}} 
        className='py-6 md:py-10 flex gap-6'
    >
        <img className='max-h-[100px]' src={image} alt="" />

        <div>
            <motion.h2 
                variants={show} 
                initial='hidden' 
                whileInView='show' 
                transition={{duration: 0.5, delay: 0.2}} 
                className='mb-4 text-xl text-black font-bold'
            > 
                {title} 
            </motion.h2>
            
            <motion.p 
                variants={show} 
                initial='hidden' 
                whileInView='show' 
                transition={{duration: 0.5, delay: 0.4}} 
                className='mb-4 text-xl text-black'
            > 
                {description} 
            </motion.p>
            
            <motion.div 
                variants={show} 
                initial='hidden' 
                whileInView='show' 
                transition={{duration: 0.5, delay: 0.6}} 
                className='flex gap-2 items-center text-[#4C5FD5]'
            >
                <span className='text-lg'> Learn More </span>
                <HiArrowLongRight size={22} />
            </motion.div>
        </div>
    </motion.section>
  )
}

export default FeatureCard