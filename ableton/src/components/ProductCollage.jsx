import React from 'react'

const ProductCollage = () => {
  return (
    <div className='max-w-[1600px] h-[58.33vw] 2xl:h-[932.8px] relative'>
        <div className='w-[58.33%] h-[58.33vw] 2xl:h-[932.8px] absolute top-0 right-0 z-0 bg-[#fbffa7]' />
        <div className='w-[41.66%] h-[41.66vw] 2xl:h-[666.56px] mt-[8.33vw] 2xl:mt-[133.28px] ml-[8.33vw] 2xl:ml-[133.28px] inline-block absolute left-0 z-[10] bg-no-repeat bg-cover bg-pos bg-photo-1' />
        <div className='w-[33.33%] h-[25vw] 2xl:h-[400px] mt-[16.665vw] 2xl:mt-[266.64px] mx-[8.33vw] 2xl:mx-[133.28px] inline-block absolute right-0 z-[10] bg-no-repeat bg-cover bg-pos bg-photo-2' />
    </div>
  )
}

export default ProductCollage