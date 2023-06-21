import React from 'react'
import img from '../assets/design/C2-instrument.webp'

const Home = () => {
  return (
    <div className='h-[200vw] pt-nav-height-sm sm:pt-nav-height-md lg:pt-0'>
      <img src={img} className='w-full h-auto' alt="" />
    </div>
  )
}

export default Home