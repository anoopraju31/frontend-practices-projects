import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import { footerItems } from '../utills/footerItems'

const FooterLinks = ({title, links}) => (
    <div>
        { title !== '' && <h1 className='mb-1 font-bold text-lg'> {title} </h1> }

        <ul>
            {
                links.map(({id, title, link}) => (
                    <li key={id}>
                        <a href={link} className='mb-1 flex gap-1 items-center text-lg'>
                            <span> {title} </span>
                            <RiArrowRightSLine />
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
)

const Footer = () => {
  return (
    <div className='p-[8.33vw] 2xl:p-[133.28px] bg-white border-t-2 border-gray-200'>
        <div>
            <h1 className='text-xl md:text-3xl font-bold mb-[4.166vw] 2xl:mb-66.656px]'> Ableton </h1>
        </div>

        <div className=''>
            <div>
                <FooterLinks title={footerItems[1].title} links={footerItems[1].links} />
            </div>
            <div className='flex gap-4'>
                
            </div>
        </div>
    </div>
  )
}

export default Footer