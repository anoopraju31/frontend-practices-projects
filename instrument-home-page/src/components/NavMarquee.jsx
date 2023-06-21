import React, { useEffect, useState } from 'react'
import { HiOutlineArrowSmRight } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'
import { marqueeText } from '../utills/navMarqueeText'

const MarqueeLink = ({textId}) => (
    <a href={marqueeText[textId].link} className='flex items-center text-gray-400 uppercase'>
        <span className='underline'> {marqueeText[textId].linkText} </span>
        <HiOutlineArrowSmRight size={20} />
    </a>
)

const NavMarquee = () => {
	const [id, setId] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setId((prev) => (prev + 1) % 3)
		}, 10000)

		return () => clearInterval(interval)
	}, [])
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -5, opacity: 0 }}
        transition={{
          duration: 1,
          repeatDelay: 9,
          repeat: Infinity,
        }}
        className='py-[3px] flex justify-center text-sm'>
          <p className='mr-2'> {marqueeText[id].text} </p>
          <MarqueeLink textId={id} />
      </motion.div>
    </AnimatePresence>
  )
}

export default NavMarquee