import React from 'react'
import { RiAdvertisementFill } from 'react-icons/ri'
import { IoIosJournal } from 'react-icons/io'
import { FaNewspaper } from 'react-icons/fa'
import { ImNewspaper } from 'react-icons/im'
import { HiPhotograph } from 'react-icons/hi'
import { FaMap } from 'react-icons/fa'
import { FaRecordVinyl } from 'react-icons/fa'
import { Card } from '@mantine/core'


const Upload = () => {

  return (
    <div className='grid grid-cols-2'>
        <div className='col-span-2' >
            <div class='text-3xl text-center font-bold my-10'>Please Select Upload Documentation Type</div> 
        </div>

        <div className='col-span-2 flex justify-center gap-x-4 mb-6'>
            <a href="/upload/AdvertisementJournal">
                <button className='flex items-end justify-between w-72 px-4 py-4 text-white bg-[#361500] rounded-lg hover:bg-[#1C0A00]'>
                    <span className='flex items-start mb-10'>
                        Advertisement Journal
                    </span>
                    <span className='flex items-end'>
                        <RiAdvertisementFill className='mr-2 text-5xl' /> 
                    </span>
                </button>
            </a>

            <a href="/upload/AdvertisementNewspaper">
                <button className='flex items-end justify-between w-72 px-4 py-4 text-white bg-[#361500] rounded-lg hover:bg-[#1C0A00]'>
                    <span className='flex items-start mb-10'>
                        Advertisement Newspaper
                    </span>
                    <span className='flex items-end'>
                        <FaNewspaper className='mr-2 text-5xl' /> 
                    </span>
                </button>
            </a>
        </div>

        <div className='col-span-2 flex justify-center gap-x-4 mb-6'>
            <a href="/upload/ArticleJournal">
                <button className='flex items-end justify-between w-72 px-4 py-4 text-white bg-[#361500] rounded-lg hover:bg-[#1C0A00]'>
                    <span className='flex items-start mb-10'>
                        Article Journal
                    </span>
                    <span className='flex items-end'>
                        <IoIosJournal className='mr-2 text-5xl' /> 
                    </span>
                </button>
            </a>

            <a href="/upload/ArticleNewspaper">
                <button className='flex items-end justify-between w-72 px-4 py-4 text-white bg-[#361500] rounded-lg hover:bg-[#1C0A00]'>
                    <span className='flex items-start mb-10'>
                        Article Newspaper
                    </span>
                    <span className='flex items-end'>
                        <ImNewspaper className='mr-2 text-5xl' /> 
                    </span>
                </button>
            </a>
        </div>

        <div className='col-span-2 flex justify-center gap-x-4 mb-6'>
            <a href="/upload/PhotographCommercial">
                <button className='flex items-end justify-between w-72 px-4 py-4 text-white bg-[#361500] rounded-lg hover:bg-[#1C0A00]'>
                    <span className='flex items-start mb-10'>
                        Photograph Commercial
                    </span>
                    <span className='flex items-end'>
                        <HiPhotograph className='mr-2 text-5xl' /> 
                    </span>
                </button>
            </a>

            <a href="/upload/SaleBrochure">
                <button className='flex items-end justify-between w-72 px-4 py-4 text-white bg-[#361500] rounded-lg hover:bg-[#1C0A00]'>
                    <span className='flex items-start mb-10'>
                        Sale Brochure
                    </span>
                    <span className='flex items-end'>
                        <FaMap className='ml-2 text-5xl' /> 
                    </span>
                </button>
            </a>
        </div>


        <div className='col-span-2 flex justify-center gap-x-4 mb-6'>
            <a href="/upload/SaleRecord">
                <button className='flex items-end justify-between w-72 px-4 py-4 text-white bg-[#361500] rounded-lg hover:bg-[#1C0A00]'>
                    <span className='flex items-start mb-10'>
                        Sale Record
                    </span>
                    <span className='flex items-end'>
                        <FaRecordVinyl className='mr-2 text-5xl' /> 
                    </span>
                </button>
            </a>
        </div>
    </div>
  )
}

export default Upload