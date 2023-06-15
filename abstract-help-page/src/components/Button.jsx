import React from 'react'

const Button = ({outlined, text}) => {
  return (
    <div className={`px-6 py-2 text-white font-medium rounded-lg ${outlined? 'border-2 border-white' : 'bg-[#4C5FD5] hover:bg-white hover:text-black'}`}> {text} </div>
  )
}

export default Button