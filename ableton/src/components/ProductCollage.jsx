import React from 'react'

const ProductCollage = ({position}) => {
  return (
    <>
      {
        position === 'right' && 
        <div className='max-w-[1600px] h-[58.33vw] 2xl:h-[932.8px] relative'>
          <div className='w-[58.33%] h-[58.33vw] 2xl:h-[932.8px] absolute top-0 right-0 z-0 bg-[#fbffa7]' />
          <div className='w-[41.66%] h-[41.66vw] 2xl:h-[666.56px] mt-[8.33vw] 2xl:mt-[133.28px] ml-[8.33vw] 2xl:ml-[133.28px] inline-block absolute left-0 z-[10] bg-no-repeat bg-cover bg-pos bg-photo-1' />
          <div className='w-[33.33%] h-[25vw] 2xl:h-[400px] mt-[16.665vw] 2xl:mt-[266.64px] mx-[8.33vw] 2xl:mx-[133.28px] inline-block absolute right-0 z-[10] bg-no-repeat bg-cover bg-pos bg-photo-2' />
        </div>
      }
      {
        position === 'left' &&
        <div className='max-w-[1600px] h-[75vw] 2xl:h-[1200px] relative'>
          <div className='w-[58.33%] h-[75vw] 2xl:h-[1200px] absolute top-0 left-0 bg-[#b6ffc0]' />
          <div className='inline-block relative top-[8.33vw] 2xl:top-[133.28px] left-[8.33vw] 2xl:left-[133.28px] z-[10]'>
            <div className='w-[33.33vw] 2xl:w-[533.28px] h-[25vw] 2xl:h-[400px]  bg-no-repeat bg-cover bg-pos bg-photo-3'/>
            <div className='w-[33.33vw] 2xl:w-[533.28px] h-[25vw] 2xl:h-[400px] mt-[8.33vw] 2xl:mt-[133.28px]  bg-no-repeat bg-cover bg-pos bg-photo-4'/>
          </div>
          <div className='w-[41.66%] h-[41.66vw] 2xl:h-[666.56px] ml-[16.66vw] 2xl:ml-[266.56px] inline-block relative z-10 bg-no-repeat bg-cover bg-pos bg-photo-5' />
        </div> 
      }

      {
        position === 'middle' &&
        <div className='max-w-[1600px] h-[58.33vw] 2xl:h-[933.28px] relative'>
          <div className="w-[66.66vw] 2xl:w-[1066.56px] h-[58.33vw] 2xl:h-[933.28px] bg-[#D5B3FF] absolute top-0 left-[16.66vw] 2xl:left-[266.56px] z-0" />
          <div className='w-[33.33vw] 2xl:w-[533.28px] h-[25vw] 2xl:h-[400px] ml-[8.33vw] 2xl:ml-[133.28px] top-[16.66vw] 2xl:top-[266.56px] relative z-[1] bg-no-repeat bg-cover bg-pos bg-photo-6' />
          <div className='w-[41.66vw] 2xl:w-[666.56px] h-[41.66vw] 2xl:h-[666.56px] absolute top-[8.33vw] 2xl:top-[133.28px] right-0 z-[1] bg-no-repeat bg-cover bg-pos bg-photo-7' />
        </div>
      }
    </>
  )
}

export default ProductCollage
