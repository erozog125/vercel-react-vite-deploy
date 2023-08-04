import React from 'react'

export const Layout = ({ children }) => {
  return (
    <div className='flex justify-center w-5/6 bg-slate-300 flex-wrap mt-20 pt-10'>
      { children }
    </div>
  )
}
