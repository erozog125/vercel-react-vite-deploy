import React from 'react'

export const Layout = ({ children }) => {
  return (
    <div className='flex justify-center flex-wrap mt-20'>
      { children }
    </div>
  )
}
