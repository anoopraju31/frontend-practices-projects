import React, { useEffect, useState } from 'react'
import { VscMenu } from 'react-icons/vsc'
import {NavLink, NavMarquee} from '.'
import { Logo } from './Logo'
import { useCurrentWidth } from '../hooks'

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

    const toggleMenu = () => setOpenMenu(prev => !prev)

    return (
        <div className='w-full'>
            <div className={`w-full fixed ${isNavbarVisible ? 'top-0' : '-top-40'} ${isNavbarVisible? '' : 'h-nav-height-sm sm:h-nav-height-md lg:h-nav-height'} left-0 z-50`}>
                <nav className='px-hori-sm sm:px-hori-md lg:px-hori py-verti-sm sm:py-verti-md lg:py-verti flex bg-white'>
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

                    <div className='hidden lg:block flex-1'>
                        {
                            isNavbarVisible && prevScrollPos !== 0?
                            <span className='flex justify-center'>
                                <Logo />
                            </span> :
                            <NavMarquee /> 
                        } 
                    </div>

                    <ul className='hidden lg:flex items-center lg:gap-1 xl:gap-3'>
                        <NavLink link='/careers' title='careers'/>
                        <NavLink link='/latest' title='latest'/>
                        <NavLink link='/contact' title='contact'/>
                    </ul>
                </nav>

                {
                    openMenu &&
                    <div className='block lg:hidden min-h-menu-height-sm sm:min-h-menu-height-md w-full bg-[#0000003d]'></div>
                }
            </div>
            

            <div className='hidden lg:block px-hori pt-nav-height-sm sm:pt-nav-height-md lg:pt-nav-height'>
                <Logo isMainLogo={true} />
            </div>

            
        </div>
    )
}

export default Navbar