import React, { useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { motion } from 'framer-motion'

const SearchBox = () => {
    const [text, setText] = useState('')
    const handleClick = () => {
        setText('')
    }

    return (
        <motion.div 
            initial={{scale: 0.3, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            transition={{duration: 1}}
            className='w-full md:max-w-[720px] p-3 bg-white rounded-md border-[1px] border-black flex justify-between items-center gap-4 focus:bg-[#4C5FD5]'>
            <input  
                type="text" 
                className='flex-1 h-8 outline-none text-lg' 
                value={text} 
                onChange={e => setText(e.target.value)}
                placeholder='search' 
            />

            <AiOutlineArrowRight 
                size={24} 
                onClick={handleClick} 
                className='hover:text-[#4C5FD5]'
            />
        </motion.div>
    )
}

export default SearchBox