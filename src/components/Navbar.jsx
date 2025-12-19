import React from 'react'
import image from '../assets/image copy.png'

const Navbar = () => {
  return (
    <div className='w-full h-28 bg-zinc-50 flex justify-between items-center px-10 shadow-md'>

      <div>
        <img className='w-44 h-44 object-contain' src={image} alt="Logo" />
      </div>

      {/* Navigation Links */}
      <nav className='flex items-center gap-8 text-gray-700 font-medium'>
        <a href="#" className='hover:text-blue-800 font-bold text-xl  transition'>HOME</a>
        <a href="#" className='hover:text-blue-800 font-bold text-xl  transition'>TECHNOLOGY</a>
        <a href="#" className='hover:text-blue-800 font-bold text-xl  transition'>SPORTS</a>
        <a href="#" className='hover:text-blue-800 font-bold text-xl  transition'>BUSINESS</a>
        <a href="#" className='hover:text-blue-800 font-bold text-xl  transition'>ENTERTAINMENT</a>
        <a href="#" className='hover:text-blue-800 font-bold text-xl  transition'>HEALTH</a>
      </nav>

      {/* Button */}
      <button className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition'>
        Get Started
      </button>
    </div>
  )
}

export default Navbar
