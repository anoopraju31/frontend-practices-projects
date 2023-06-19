import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

const JobTeaser = () => {
  return (
    <div className='mx-[8.33vw] 2xl:mx-[133.28px] mb-[8.33vw] 2xl:mb-[133.28px] grid grid-cols-1 xl:grid-cols-2'>
      <div className='h-[41.66vw] 2xl:h-[666.56px] bg-no-repeat bg-cover bg-pos bg-photo-8' />
      <div className='p-[8.33vw] 2xl:p-[133.28px] flex justify-center flex-col bg-[#B1C5FF]'>
        <h1 className='text-xl lg:text-3xl font-medium mb-7'> We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us. </h1>
        <a href="/" className='flex gap-4 items-center text-xl lg:text-3xl font-medium text-blue-600'>
          <span> See latest jobs </span>
          <FiChevronRight />
        </a>
      </div>
    </div>
  )
}

export default JobTeaser