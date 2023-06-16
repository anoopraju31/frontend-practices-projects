import React from 'react'
import { Logo } from './'

const Navbar = () => {
  return (
    <nav className='px-5 flex justify-between items-center'>
      <div className='flex gap-6'>
        <div>
          <Logo />
        </div>

        <div>
          <ul className='flex gap-5'>
            <li>
              <a href="/"> Live </a>
            </li>
            <li>
              <a href="/"> Live </a>
            </li>
            <li>
              <a href="/"> Live </a>
            </li>
            <li>
              <a href="/"> Live </a>
            </li>
            <li>
              <a href="/"> Live </a>
            </li>
            <li>
              <a href="/"> Live </a>
            </li>
            <li>
              <a href="/"> Live </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar