import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { reveal } from '../utills/animations';

const FooterSection = ({section}) => {
    const {title, items, contact} = section
    console.log(section);
  return (
    <motion.section 
        variants={reveal}
        initial='hiddenLeftVariant'
        whileInView='revealedVariant'
        transition={{duration: 1}} 
        className='text-white mb-10'
    >
        <h2 className='py-2 text-xl font-bold'> {title} </h2>

        <div>
            {
                items.map((item, idx) => (
                    <motion.p 
                        key={idx}
                        variants={reveal}
                        initial='hiddenLeftVariant'
                        whileInView='revealedVariant'
                        transition={{delay: 0.5 + (idx / 10) , duration: 0.25}} 
                    > 
                        {item} 
                    </motion.p>
                ))
            }
        </div>

            <AnimatePresence>
                {
                    contact &&
                    <motion.div 
                        className='mt-8'
                        variants={reveal}
                        initial='hiddenLeftVariant'
                        whileInView='revealedVariant'
                        transition={{delay: 0.5 + (items.length / 10) , duration: 0.25}} 
                    >
                        <h4 className='font-bold'> Contract Us </h4>
                        <p> info@abstract.com </p>
                    </motion.div>
                }
            </AnimatePresence>
    </motion.section>
  )
}

export default FooterSection