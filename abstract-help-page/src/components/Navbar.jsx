import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { AnimatePresence, motion } from 'framer-motion'
import { Button, Logo } from './'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const handletoggle = () => setToggleMenu(prev => !prev)
  return (
    <div className="bg-black relative z-50">
        <nav className='max-w-[1400px] h-[88px] z-50 mx-auto px-6 flex items-center justify-between'>
            {/* logo */}
            <div className='flex gap-3 text-white text-xl font-medium'>
                <div className='group w-[110px] flex hover:text-gray-400'>
                    <Logo />
                    <span> Abstract </span>
                </div>

                <div className='px-1 border-l-2 border-l-white'>
                    Help Center
                </div>
            </div>

            <div className='hidden md:flex gap-4'>
                <Button outlined text='Submit a request' />
                <Button text='Sign In' />
            </div>

            <div className='block md:hidden text-white' onClick={handletoggle}>
                {
                    toggleMenu?
                    <AiOutlineClose size={22} /> :
                    <GiHamburgerMenu size={22} />
                }
            </div>
        </nav>

        <AnimatePresence>
        {
            toggleMenu && 
            <motion.div 
                initial={{y: -50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                exit={{y: -50, opacity: 0}}
                transition={{duration: 0.5, type: 'spring', stiffness: 100}}
                className="absolute top-[88px] left-0 -z-10 w-full py-7 bg-black border-t-[1px] border-[#dadbf1] text-white flex flex-col justify-center items-center"
            >
                <p className='px-10 py-3 text-lg border-b-[1px] border-[#dadbf1]'> Submit a request </p>
                <p className='py-3 text-lg'> Sign In </p>
            </motion.div>
        }
        </AnimatePresence>
    </div>
  )
}

export default Navbar