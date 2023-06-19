import React from 'react'

const Dropdown = ({value, options}) => {
  return (
    <div className='px-2 bg-gray-200'>
        <select className='w-full bg-gray-200 outline-none' value={value}>
            {
                options.map((option, idx) => (
                    <option key={idx} value={option}> {option} </option>
                ))
            }
        </select>
    </div>
  )
}

export default Dropdown