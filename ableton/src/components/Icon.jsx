import React from 'react'

const Icon = ({background, link, MediaIcon}) => {
  return (
    <div className={`p-2 text-2xl ${background} text-white`}>
      <a href={link}>
        {MediaIcon}
      </a>
    </div>
  )
}

export default Icon