import React from 'react'
import { motion } from 'framer-motion'

const NavLink = ({title, link}) => {
  return (
    <motion.li 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1 }}
    >
        <a 
            className='px-4 py-[3px] flex items-center rounded-3xl bg-gray-200 text-xs hover:bg-black hover:text-white hover:rounded-lg transition-all'
            href={link}
        > 
            <span className='leading-relaxed uppercase'> {title}  </span>
        </a>
    </motion.li>
  )
}

export default NavLink