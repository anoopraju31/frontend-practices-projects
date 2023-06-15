import React from 'react'
import { SearchBox } from './'

const HeroSection = () => {
    return (
        <section className='py-20 bg-[#dadbf1] flex flex-col justify-center items-center'>
            <h1 className='text-center text-3xl sm:text-5xl md:text-7xl mb-8'> How can we help? </h1>
            <SearchBox />
        </section>
    )
}

export default HeroSection