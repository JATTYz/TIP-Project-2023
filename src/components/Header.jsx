import React from 'react'
import { BiDoorOpen } from 'react-icons/bi'

const Header = () => {

  return (
    <div>  
      <div className='bg-[#1C0A00] text-2xl w-full h-16 flex px-10 justify-between'>
        <h1 className='text-white font-bold flex items-center'>
        <img 
          className='h-10 pr-5' 
          src="/rccabadge.png" 
          alt="rcca-badge" 
        />          
          Rover Car Club Of Australia
        </h1>
        <a href="/login"
        className='text-white flex items-center text-lg font-bold'
        >
          <span className='mr-2 pb-1'>
            <BiDoorOpen size={24} />
          </span>
          Admin
        </a>
      </div>

    <div className='bg-[#361500] text-lg w-full flex'>
      <div className='grid grid-cols-5 w-full justify-items-center content-center text-center text-white'>
        <a href="/" className='w-full hover:bg-[#1C0A00] transition delay-150 duration-300 ease-in-out cursor-pointer py-2'>Home</a>
        <a href="/about/" className='w-full hover:bg-[#1C0A00] transition delay-150 duration-300 ease-in-out cursor-pointer py-2'>About</a>
        {/* <a href="/history/" className='w-full hover:bg-[#1C0A00] transition delay-150 duration-300 ease-in-out cursor-pointer py-2'>History</a> */}
        <a href="/upload/" className='w-full hover:bg-[#1C0A00] transition delay-150 duration-300 ease-in-out cursor-pointer py-2'>Upload</a>
        <a href="/contact/" className='w-full hover:bg-[#1C0A00] transition delay-150 duration-300 ease-in-out cursor-pointer py-2'>Contact Us</a>
      </div>
    </div>
  </div>
)
}
export default Header