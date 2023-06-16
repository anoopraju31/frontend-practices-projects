import React from 'react'
import { Logo } from './'

const Navbar = () => {
  return (
    <nav className='px-5 py-3 flex justify-between items-center'>
      <div className='flex items-center gap-6'>
        <div>
          <Logo />
        </div>

        <div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar