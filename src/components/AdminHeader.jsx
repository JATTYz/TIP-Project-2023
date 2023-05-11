import React from 'react'
import { BiDoorOpen } from 'react-icons/bi'

const AdminHeader = () => {

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
            <button
            className='text-white flex items-center text-lg font-bold'
            onClick={() => console.log('Admin login click successful')}
            >
            <span className='mr-2 pb-1'>
                <BiDoorOpen size={24} />
            </span>
            Admin
            </button>
        </div>
        </div>
    )
}
export default AdminHeader