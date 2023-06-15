import React from 'react'
import { FooterSection } from '.'
import { sections } from '../utills/footerSections'

const Footer = () => {
  return (
    <div className='w-full bg-black'>
        <footer className='max-w-[1400px] mx-auto px-6 py-16 grid grid-cols-2  md:grid-cols-4'>

            {sections.map((section, idx) => <FooterSection key={idx} section={section} />)}
        </footer>
    </div>
  )
}

export default Footer