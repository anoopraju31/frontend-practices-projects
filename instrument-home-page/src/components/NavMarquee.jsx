import React, { useEffect, useState } from 'react'
import { HiOutlineArrowSmRight } from 'react-icons/hi'
import { marqueeText } from '../utills/navMarqueeText'

const MarqueeLink = ({textId}) => (
    <a href={marqueeText[textId].link} className='flex items-center text-gray-400'>
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
    <div className='py-[3px] flex justify-center text-sm'>
        <p className='mr-2'> {marqueeText[id].text} </p>
        <MarqueeLink textId={id} />
    </div>
  )
}

export default NavMarquee