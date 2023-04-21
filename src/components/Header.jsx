import React, { useState } from 'react'


const Header = () => {

  return (
<div>  
  <div class='bg-[#1C0A00] text-2xl w-full h-16 flex px-10 justify-between'>
    <h1 class='text-white flex items-center'>Rover Car Club Of Australia</h1>
    <button class='text-white flex items-center text-sm hover:bg-[#361500] transition delay-150 duration-300 ease-in-out'>Login As Admin</button>
  </div>  

     <div className='bg-[#361500] text-lg w-full h-10 flex'>
      
        <div className='grid grid-cols-6 w-full justify-items-center content-center text-center text-white'>
            <div className='w-full h-10 hover:bg-[#1C0A00] transition delay-150 duration-300 ease-in-out cursor-pointer'><a href="/">Home</a></div>
            <div className='w-full hover:bg-[#1C0A00] transition delay-150 duration-300 ease-in-out cursor-pointer'><a href="/about/">About</a></div>
            <div className='w-full hover:bg-[#1C0A00] transition delay-150 duration-300 ease-in-out cursor-pointer'><a href="/history/">History</a></div>
            <div className='w-full hover:bg-[#1C0A00] transition delay-150 duration-300 ease-in-out cursor-pointer'><a href="/announcement/">Accouncements</a></div>
            <div className='w-full hover:bg-[#1C0A00] transition delay-150 duration-300 ease-in-out cursor-pointer'><a href="/event/">Events</a></div>
            <div className='w-full hover:bg-[#1C0A00] transition delay-150 duration-300 ease-in-out cursor-pointer'><a href="/contact/">Contact Us</a></div>
        </div>
    </div>
  </div>
)
}
export default Header