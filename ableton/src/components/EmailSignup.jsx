import React from 'react'

const EmailSignup = () => {
  return (
    <div className='mt-6 flex'>
        <input type="text" placeholder='Email Address' className='sm:flex-1 px-4 py-2 bg-gray-200 text-sm xl:text-lg' />
        <div className='max-w-[97px] lg:max-w-[111px] px-4 md:px-6 py-2 flex justify-center items-center text-sm xl:text-lg bg-blue-600 text-white'> Sign Up </div>
    </div>
  )
}

export default EmailSignup