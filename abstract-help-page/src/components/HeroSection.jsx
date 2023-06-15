import React from 'react'
import { motion } from 'framer-motion'

import { SearchBox } from './'

const HeroSection = () => {
    return (
        <motion.section className='px-6 py-28 bg-[#dadbf1] flex flex-col justify-center items-center'>
            <motion.h1 
                initial={{scale: 0.3, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{duration: 1}}
                className='text-center text-3xl sm:text-5xl md:text-7xl mb-10'> How can we help? </motion.h1>
            <SearchBox />
        </motion.section>
    )
}

export default HeroSection