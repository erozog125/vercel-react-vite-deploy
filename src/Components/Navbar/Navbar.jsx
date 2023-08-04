import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ShoppingCartContext } from '../Context/Context';


export const Navbar = () => {

  const activeStyle = 'underline'
  const context = useContext(ShoppingCartContext)

  return (
    <nav className='bg-slate-300 flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
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
        <li className='justify-center'>
          <NavLink 
            to='/'
            className = { ({isActive}) => isActive ? activeStyle : undefined }
          >
          <div className='w-50 flex'>
            <AiOutlineShoppingCart className='text-violet-950 hover:text-green-950 w-8 h-8' />
            <p className='text-slate-950 font-bold w-6 h-6 rounded-full border-collapse bg-lime-600 flex justify-center items-center'>{context.count}</p>
          </div>
          </NavLink>
        </li>        
      </ul>
    </nav>
  )
}


