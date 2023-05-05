import React from 'react'

const Upload = () => {

  return (
    <div className='h-screen'>
           <h1 className='text-center font-bold text-2xl my-10'>Please Select Upload Documentation Type</h1>
           <div className='w-full grid md:grid-cols-2 '>
            <div className='my-3 h-24 text-center ' >
                <a href="/upload/ArticleJournal" >
                 <button className="text-white border-4 border-amber-950 rounded-lg  bg-amber-800 h-full w-1/2">AdvertisementNewspaper</button>
                </a>
            </div>
            <div  className='my-3 h-24 text-center '>
                <a href="/upload/ArticleJournal" >
                 <button className="text-white border-4 border-amber-950 rounded-lg  bg-amber-800 h-full w-1/2">ArticleJournal</button>
                
                </a>
            </div>
            <div  className='my-3 h-24 text-center '>
                <a href="/upload/AdvertisementJournal" >
                 <button className="text-white border-4 border-amber-950 rounded-lg  bg-amber-800 h-full w-1/2">AdvertisementJournal</button>
                
                </a>
            </div>
            <div  className='my-3 h-24 text-center '>
                <a href="/upload/ArticleNewspaper" >
                 <button className="text-white border-4 border-amber-950 rounded-lg  bg-amber-800 h-full w-1/2">ArticleNewspaper</button>
                
                </a>
            </div>
            <div  className='my-3 h-24 text-center '>
                <a href="/upload/SaleBrochure" >
                 <button className="text-white border-4 border-amber-950 rounded-lg  bg-amber-800 h-full w-1/2">SalesBrochure</button>
                
                </a>
            </div>
            <div  className='my-3 h-24 text-center '>
                <a href="/upload/SaleRecord" >
                 <button className="text-white border-4 border-amber-950 rounded-lg  bg-amber-800 h-full w-1/2">SalesRecord</button>
                
                </a>
            </div>
            <div  className='my-3 h-24 text-center '>
                <a href="/upload/PhotographCommercial" >
                 <button className="text-white border-4 border-amber-950 rounded-lg  bg-amber-800 h-full w-1/2">PhotographCommercial</button>
                 
                </a>
            </div>
           </div> 
    </div>
  )
}

export default Upload