import React from 'react'
import { HiOutlineArrowSmRight } from 'react-icons/hi'

const MarqueeLink = ({title, link}) => (
    <a href={link} className='flex items-center text-gray-400'>
        <span className='underline'> {title} </span>
        <HiOutlineArrowSmRight size={20} />
    </a>
)

const NavMarquee = () => {
  return (
    <div className='py-[3px] flex justify-center text-sm'>
        <p className='mr-2'> 392 MAKERS CREATING THINGS PEOPLE LOVE TO USE. </p>
        <MarqueeLink title='Learn more' link='/more' />
    </div>
  )
}

export default NavMarquee