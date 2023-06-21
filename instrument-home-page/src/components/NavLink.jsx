import React from 'react'

const NavLink = ({title, link}) => {
  return (
    <li>
        <a 
            className='px-4 py-[3px] flex items-center rounded-3xl bg-gray-200 hover:bg-black hover:text-white hover:rounded-lg transition-all'
            href={link}
        > 
            <span className='leading-relaxed uppercase'> {title}  </span>
        </a>
    </li>
  )
}

export default NavLink