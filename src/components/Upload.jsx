import React from 'react'
import NewsPaper from '../../public/newspaper.png'
const boxShadow = '0px 0px 4px 0px #b1b1b1'
const Upload = () => {

  return (
    <div className='h-screen'>
           <h1 className='text-center font-bold text-2xl my-10'>Please Select Upload Documentation Type</h1>
           <div className='w-full flex justify-around flex-wrap	 '>
            <div className='my-3 h-24 text-center mr-4 ' >
                <a href="/upload/AdvertisementNewspaper" >
                 <button class="mt-4 text-white bg-[#361500] rounded-lg hover:bg-[#5f2703] flex justify-between items-center overflow-hidden"> <span class="px-4">Advertisement Newspaper</span> <div class=" rounded-lg overflow-hidden w-16  flex justify-center" style={{boxShadow}}><img class='w-8 my-1 rounded-lg overflow-hidden' src='../../public/newspaper.png' /></div> </button>
                </a>
            </div>
            <div  className='my-3 h-24 text-center mr-4 '>
                <a href="/upload/PhotographCommercial" >
                 <button class="mt-4 text-white bg-[#361500] rounded-lg hover:bg-[#5f2703] flex justify-between items-center overflow-hidden"> <span class="px-4">  Photograph Commercial </span> <div class=" rounded-lg overflow-hidden w-16  flex justify-center" style={{boxShadow}}><img class='w-8 my-1 rounded-lg overflow-hidden ' src='../../public/camera.png' /></div> </button>
                 
                </a>
            </div>
            
            <div  className='my-3 h-24 text-center mr-4 '>
                <a href="/upload/AdvertisementJournal" >
                 <button class="mt-4 text-white bg-[#361500] rounded-lg hover:bg-[#5f2703] flex justify-between items-center overflow-hidden"> <span class="px-4">  Advertisement Journal </span> <div class=" rounded-lg overflow-hidden w-16  flex justify-center" style={{boxShadow}}><img class='w-8 my-1 rounded-lg overflow-hidden ' src='../../public/agendas.png' /></div> </button>
                
                </a>
            </div>
            <div  className='my-3 h-24 text-center mr-4 '>
                <a href="/upload/ArticleNewspaper" >
                 <button class="mt-4 text-white bg-[#361500] rounded-lg hover:bg-[#5f2703] flex justify-between items-center overflow-hidden"> <span class="px-4">  Article Newspaper </span> <div class=" rounded-lg overflow-hidden w-16  flex justify-center" style={{boxShadow}}><img class='w-8 my-1 rounded-lg overflow-hidden ' src='../../public/application.png' /></div> </button>
                
                </a>
            </div>
            <div  className='my-3 h-24 text-center mr-4 '>
                <a href="/upload/SaleBrochure" >
                 <button class="mt-4 text-white bg-[#361500] rounded-lg hover:bg-[#5f2703] flex justify-between items-center overflow-hidden"> <span class="px-4">  Sales Brochure </span> <div class=" rounded-lg overflow-hidden w-16  flex justify-center" style={{boxShadow}}><img class='w-8 my-1 rounded-lg overflow-hidden ' src='../../public/sales.png' /></div> </button>
                
                </a>
            </div>
            <div  className='my-3 h-24 text-center mr-4 '>
                <a href="/upload/SaleRecord" >
                 <button class="mt-4 text-white bg-[#361500] rounded-lg hover:bg-[#5f2703] flex justify-between items-center overflow-hidden"> <span class="px-4">  Sales Record </span> <div class=" rounded-lg overflow-hidden w-16  flex justify-center" style={{boxShadow}}><img class='w-8 my-1 rounded-lg overflow-hidden ' src='../../public/acquisition.png' /></div> </button>
                
                </a>
            </div>
            <div  className='my-3 h-24 text-center mr-4 '>
                <a href="/upload/ArticleJournal" >
                 <button class="mt-4 text-white bg-[#361500] rounded-lg hover:bg-[#5f2703] flex justify-between items-center overflow-hidden"> <span class="px-4">  Article Journal </span> <div class=" rounded-lg overflow-hidden w-16  flex justify-center" style={{boxShadow}}><img class='w-8 my-1 rounded-lg overflow-hidden ' src='../../public/copywriting.png' /></div> </button>
                </a>
            </div>
           
           </div> 
    </div>
  )
}

export default Upload