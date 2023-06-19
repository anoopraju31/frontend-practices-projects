import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { motion} from 'framer-motion'

const JobTeaser = () => {
  return (
    <motion.div 
      initial={{opacity: 0, scale: 0.3}} 
      whileInView={{opacity: 1, scale: 1}} 
      transition={{delay: 0.1, duration: 1}}
      className='mx-[8.33vw] 2xl:mx-[133.28px] mb-[8.33vw] 2xl:mb-[133.28px] grid grid-cols-1 xl:grid-cols-2'
    >
      <div className='h-[41.66vw] 2xl:h-[666.56px] bg-no-repeat bg-cover bg-pos bg-photo-8' />
      <div className='p-[8.33vw] 2xl:p-[133.28px] flex justify-center flex-col bg-[#B1C5FF]'>
        <h1 className='text-lg lg:text-3xl font-medium mb-7'> We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us. </h1>
        <a href="/" className='flex gap-4 items-center text-lg lg:text-3xl font-medium text-blue-600'>
          <span> See latest jobs </span>
          <FiChevronRight />
        </a>
      </div>
    </motion.div>
  )
}

export default JobTeaser