import React from 'react'

const MenuSocialItem = ({Icon, title, link}) => {
  return (
    <div className='flex items-center gap-1 text-gray-600'>
        {Icon}
        <a href={link}> {title} </a>
    </div>
  )
}

export default MenuSocialItem