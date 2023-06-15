import React from 'react'
import { HiArrowLongRight } from 'react-icons/hi2'

const FeatureCard = ({image, title, description}) => {
  return (
    <section className='py-6 md:py-10 flex gap-6'>
        <img className='max-h-[100px]' src={image} alt="" />

        <div>
            <h2 className='mb-4 text-xl text-black font-bold'> {title} </h2>
            <p className='mb-4 text-xl text-black'> {description} </p>
            <div className='flex gap-2 items-center text-[#4C5FD5]'>
                <span className='text-lg'> Learn More </span>
                <HiArrowLongRight size={22} />
            </div>
        </div>
    </section>
  )
}

export default FeatureCard