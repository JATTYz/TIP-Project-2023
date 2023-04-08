import React, { useState } from 'react'


const Header = () => {

  return (
     <div className='bg-[#361500] text-lg w-full h-10 flex'>
        <div className='grid grid-cols-6 w-full justify-items-center content-center text-center text-white'>
            <div className='w-full h-10 hover:bg-[#1C0A00] transition delay-150 duration-300 ease-in-out cursor-pointer'>Home</div>
            <div className='w-full hover:bg-[#1C0A00] transition delay-150 duration-300 ease-in-out cursor-pointer'>About</div>
            <div className='w-full hover:bg-[#1C0A00] transition delay-150 duration-300 ease-in-out cursor-pointer'>History</div>
            <div className='w-full hover:bg-[#1C0A00] transition delay-150 duration-300 ease-in-out cursor-pointer'>Announcements</div>
            <div className='w-full hover:bg-[#1C0A00] transition delay-150 duration-300 ease-in-out cursor-pointer'>Events</div>
            <div className='w-full hover:bg-[#1C0A00] transition delay-150 duration-300 ease-in-out cursor-pointer'>Contact Us</div>
        </div>
    </div>
  )
}

export default Header