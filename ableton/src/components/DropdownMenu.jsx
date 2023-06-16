import React from 'react'
import { motion } from 'framer-motion'
import { navItems, navMoreFromItems, navMoreOnItems } from '../utills/navbarItems'
import { reveal } from '../utills/animations'

const DropdownLink = ({title, link, description, styles, present}) => (
    <li>
        <a className={`${styles} ${present && 'text-orange-400'} flex flex-col`} href={link}> 
            <span className={`${description && 'font-medium'}`}> {title} </span> 
            {description && <span className='text-sm'> {description} </span>}
        </a>
    </li>
)

const DropdownMenu = () => {
  return (
    <motion.div 
        variants={reveal}
        initial='hiddenVariant' 
        animate='revealedVariant' 
        exit='exitVariant'
        transition={{duration: 1}} 
        className='block lg:hidden w-full -z-50 p-5 bg-blue-700 text-white font-medium'
    >
        <ul className='flex flex-col gap-6 text-lg '>
            {
                navItems.map(({id, title, link}) => <DropdownLink key={id} title={title} link={link} />)
            }

            <DropdownLink title='Try Live for free' link='/live-free'  />
            <DropdownLink title='Log in or register' link='/login' styles='text-sm font-medium' />
        </ul>

        <div className='my-6 '>
            <h1 className='text-lg mb-4'> More on Ableton.com: </h1>
            <ul className='text-sm flex flex-col gap-3'>
                {
                    navMoreOnItems.map(({id, title, link, present}) => <DropdownLink key={id} title={title} link={link} present={present} />)
                }
            </ul>
        </div>

        <div className='text-lg mb-4 font-normal'>
            <h2> More from Ableton: </h2>
            <ul className="flex flex-wrap gap-6">
                {
                    navMoreFromItems.map(({id, title, link, description}) => <DropdownLink key={id} title={title} link={link} description={description} styles='w-56' />)
                }
            </ul>
        </div>
    </motion.div>
  )
}

export default DropdownMenu