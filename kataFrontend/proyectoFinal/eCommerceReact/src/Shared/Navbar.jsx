import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='flex space-x-4 bg-white h-[74px] shadow-lg text-center justify-between items-center px-4'>
      <Link to='/' className='text-orange-500'>Home</Link>
    </div>
  )
}
