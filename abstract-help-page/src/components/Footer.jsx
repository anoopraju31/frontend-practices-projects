import React from 'react'
import { FooterSection, Logo } from '.'
import { sections } from '../utills/footerSections'

const Footer = () => {
  return (
    <div className='w-full bg-black'>
        <footer className='max-w-[1400px] mx-auto px-6 py-16 flex flex-col md:flex-row'>
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-4">
              {
                sections.map((section, idx) => <FooterSection key={idx} section={section} />)
              }
            </div>

            <div className='mt-10 ml-4 md:mt-40 flex flex-col gap-6 text-white'>
              <div className='w-[138px]'>
                <Logo />
              </div>

              <div>
                <p> © Copyright 2023 </p>
                <p> Abstract Studio Design, Inc. </p>
                <p> All rights reserved </p>
              </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer