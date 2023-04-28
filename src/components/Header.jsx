import React, { useState } from 'react'
import DropDownProfile from './DropDownProfile'
import { BsPersonBadge } from 'react-icons/bs'

const Header = () => {

  const [openProfile, setOpenProfile] = useState(false)

  return (
    <div>  
      <div className='bg-[#1C0A00] text-2xl w-full h-16 flex px-10 justify-between'>
        <h1 className='text-white font-bold flex items-center'>
          Rover Car Club Of Australia
        </h1>
        <button
          className='text-white flex items-center text-lg font-bold'
          onClick={() => setOpenProfile(true)}
          >
          <span className='mr-2 pb-1'>
            <BsPersonBadge size={24} />
          </span>
          Admin
        </button>
        {openProfile && <DropDownProfile />}
      </div>

    <div className='bg-[#361500] text-lg w-full flex'>
      <div className='grid grid-cols-6 w-full justify-items-center content-center text-center text-white'>
        <a href="/" className='w-full hover:bg-[#1C0A00] transition delay-150 duration-300 ease-in-out cursor-pointer py-2'>Home</a>
        <a href="/about/" className='w-full hover:bg-[#1C0A00] transition delay-150 duration-300 ease-in-out cursor-pointer py-2'>About</a>
        <a href="/history/" className='w-full hover:bg-[#1C0A00] transition delay-150 duration-300 ease-in-out cursor-pointer py-2'>History</a>
        <a href="/announcement/" className='w-full hover:bg-[#1C0A00] transition delay-150 duration-300 ease-in-out cursor-pointer py-2'>Accouncements</a>
        <a href="/event/" className='w-full hover:bg-[#1C0A00] transition delay-150 duration-300 ease-in-out cursor-pointer py-2'>Events</a>
        <a href="/contact/" className='w-full hover:bg-[#1C0A00] transition delay-150 duration-300 ease-in-out cursor-pointer py-2'>Contact Us</a>
      </div>
    </div>
  </div>
)
}
export default Header