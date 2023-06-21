import React, { useEffect, useState } from 'react'
import { VscMenu } from 'react-icons/vsc'
import { motion } from 'framer-motion'
import {MenuSocialItem, NavLink, NavMarquee, NavMenuItem} from '.'
import { Logo } from './Logo'
import { useCurrentWidth } from '../hooks'
import { menuItems } from '../utills/navMenuItems'

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [isNavbarVisible, setNavbarVisible] = useState(true)
    const [prevScrollPos, setPrevScrollPos] = useState(0)

    const currentWidth = useCurrentWidth()
    
    useEffect(() => {
        const handleScroll = () => {
            setNavbarVisible(prevScrollPos > window.scrollY || window.scrollY < 10)
            setPrevScrollPos(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [prevScrollPos])

    useEffect(() => {
        if (currentWidth >= 1024) setOpenMenu(false)
    }, [currentWidth]);

    const toggleMenu = () => setOpenMenu(prev => !prev)

    return (
        <div className='w-full'>
            <div className={`w-full fixed ${isNavbarVisible || (!isNavbarVisible && openMenu && currentWidth < 1024) ? 'top-0' : '-top-40'} left-0 transition-top duration-1000 ease-in-out ${!isNavbarVisible && !(openMenu && currentWidth < 1024)? '' : (openMenu && currentWidth < 1024)? 'h-screen' : 'h-nav-height-sm sm:h-nav-height-md lg:h-nav-height'} overflow-y-clip ${openMenu && currentWidth < 1024? 'bg-[#ffffff75]' : 'bg-white'} backdrop-blur-2xl ${openMenu? 'flex justify-between flex-col' : ''}`}>

                <nav className='px-hori-sm sm:px-hori-md lg:px-hori py-verti-sm sm:py-verti-md lg:py-verti flex '>
                    <div className='flex lg:hidden flex-1 items-center'>
                        <span className=''>
                            <Logo />
                        </span>
                    </div>
                    <ul className='flex items-center gap-6'>
                        {
                            (!openMenu || (currentWidth >= 1024)) && 
                            <div className='hidden sm:flex items-center gap-3 lg:gap-1 xl:gap-3'>
                                <NavLink link='/work' title='Work'/>
                                <NavLink link='/service' title='Service'/>
                                <NavLink link='/about' title='About'/>
                            </div>
                        }
                        <div className='block lg:hidden py-1' onClick={toggleMenu}> <VscMenu size={23} /> </div>
                    </ul>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className='hidden lg:block flex-1'>
                        {
                            isNavbarVisible && prevScrollPos !== 0?
                            <span className='flex justify-center'>
                                <Logo />
                            </span> :
                            <NavMarquee /> 
                        } 
                    </motion.div>

                    <ul className='hidden lg:flex items-center lg:gap-1 xl:gap-3'>
                        <NavLink link='/careers' title='careers'/>
                        <NavLink link='/latest' title='latest'/>
                        <NavLink link='/contact' title='contact'/>
                    </ul>
                </nav>

                {
                    openMenu &&
                    <div className='block lg:hidden px-hori-sm sm:px-hori-md lg:px-hori py-verti-sm sm:py-verti-md lg:py-verti'>
                        {
                            menuItems.map(({id, title, link}) => <NavMenuItem key={id} title={title} link={link} />)
                        }
                    </div>
                }

                {
                    openMenu &&
                    <div className='flex lg:hidden px-hori-sm sm:px-hori-md lg:px-hori py-verti-sm sm:py-verti-md lg:py-verti justify-between'>
                        <MenuSocialItem />
                        <MenuSocialItem />
                        <MenuSocialItem />
                    </div>
                }
            </div>
            

            <div className='hidden lg:block px-hori pt-nav-height-sm sm:pt-nav-height-md lg:pt-nav-height'>
                <Logo isMainLogo={true} />
            </div>

            
        </div>
    )
}

export default Navbar