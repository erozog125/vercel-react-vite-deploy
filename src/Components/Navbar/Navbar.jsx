import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

  const activeStyle = 'underline'

  return (
    <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg text-blue-900'>
          <NavLink 
            to='/'
            className = { ({isActive}) => isActive ? activeStyle : undefined
          }>
          Shopi
          </NavLink>
        </li>        
        <li>
          <NavLink
            to='/'
            className = { ({isActive}) => isActive ? activeStyle : undefined }
          >
          All
          </NavLink>
        </li>        
        <li>
          <NavLink
           to='/clothes'
           className = { ({isActive}) => isActive ? activeStyle : undefined }
          >
          Clothes
          </NavLink>
        </li>        
        <li>
          <NavLink 
            to='/electronics'
            className = { ({isActive}) => isActive ? activeStyle : undefined }
          >
          Electronics
          </NavLink>
        </li>        
        <li>
          <NavLink 
            to='/furnitures'
            className = { ({isActive}) => isActive ? activeStyle : undefined }
          >
          Furnitures
          </NavLink>
        </li>        
        <li>
          <NavLink 
            to='/toys'
            className = { ({isActive}) => isActive ? activeStyle : undefined }
          >
          Toys
          </NavLink>
        </li>        
        <li>
          <NavLink 
            to='/others'
            className = { ({isActive}) => isActive ? activeStyle : undefined }
          >
          Others
          </NavLink>
        </li>        
      </ul>
      <ul className='flex items-center gap-3'>
        <li>
          <NavLink 
            to='/'
            className = { ({isActive}) => isActive ? activeStyle : undefined }
          >
          @edwindev
          </NavLink>
        </li>        
        <li>
          <NavLink 
            to='/my-account'
            className = { ({isActive}) => isActive ? activeStyle : undefined }
          >
          My Account
          </NavLink>
        </li>        
        <li>
          <NavLink
            to='/my-order'
            className = { ({isActive}) => isActive ? activeStyle : undefined }
          >
          My Order
          </NavLink>
        </li>        
        <li>
          <NavLink 
            to='/my-orders'
            className = { ({isActive}) => isActive ? activeStyle : undefined }
          >
          My orders
          </NavLink>
        </li>        
        <li>
          <NavLink 
            to='/SignIn'
            className = { ({isActive}) => isActive ? activeStyle : undefined }
          >
          SignIN
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/'
            className = { ({isActive}) => isActive ? activeStyle : undefined }
          >
          Cart 0
          </NavLink>
        </li>        
      </ul>
    </nav>
  )
}


