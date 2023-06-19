import React from 'react'
import { motion } from 'framer-motion'
import { navMoreFromItems, navMoreOnItems } from '../utills/navbarItems'
import { reveal } from '../utills/animations'

const Link = ({title, link, description, present}) => (
  <li>
    <a className={`flex flex-col text-lg ${present && 'text-orange-400'}`} href={link}> 
      <span className={`${description && 'font-medium'}`}> {title} </span>
      {
        description &&
        <span> {description} </span>
      }
    </a>
  </li>
)

const MoreDropdown = () => {
  return (
    <motion.div 
      variants={reveal}
      initial='hiddenVariant' 
      animate='revealedVariant' 
      exit='hiddenVariant'
      transition={{duration: 0.5}} 
      className='p-5 -z-30'>
      <div>
        <h2 className='text-2xl font-medium mb-2'> More on Ableton.com: </h2>

        <ul className='flex gap-5'>
          {
            navMoreOnItems.map(({id, title, link, present}) => <Link key={id} title={title} link={link} present={present} />)
          }
        </ul>
      </div>

      <div className='my-8'>
        <h2 className='text-2xl font-medium mb-2'> More from Ableton: </h2>
        
        <ul className='flex gap-5'>
          {
            navMoreFromItems.map(({id, title, link, description}) => <Link key={id} title={title} link={link} description={description} />)
          }
        </ul>
      </div>
    </motion.div>
  )
}

export default MoreDropdown