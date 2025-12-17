import React from 'react'

import image from '../assets/Logo.png'
const Navbar = () => {
  return (
    <div className='w-full h-20 bg-amber-700 flex justify-center items-center gap-16'>
      <div>
        <img className='w-30 h-30' src={image} alt="" />
      </div>
      <nav>
        <a href="">Home</a>
        <a href="">Technology</a>
        <a href="">Sport</a>
        <a href="">Business</a>
        <a href="">Entertainment</a>
        <a href="">Health</a>
      </nav>
      <button>Get Started</button>
    </div>
  )
}

export default Navbar