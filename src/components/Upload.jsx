import React from 'react';
import NewsPaper from '../../public/newspaper.png';

const Upload = () => {
  return (
    <div className='h-screen flex justify-center items-start'>
      <div className='grid grid-cols-2 gap-2 mt-10'>
        <div className='my-3 text-center' style={{ marginBottom: '-0.90rem' }}>
          <a href="/upload/AdvertisementNewspaper">
            <button className="mt-4 text-white bg-[#361500] rounded-lg hover:bg-[#5f2703] flex justify-between items-center overflow-hidden w-full">
              <span className="px-4">Advertisement Newspaper</span>
              <div className="rounded-lg overflow-hidden w-16 flex justify-center">
                <img className='w-8 my-1 rounded-lg overflow-hidden' src={NewsPaper} alt='Advertisement Newspaper' />
              </div>
            </button>
          </a>
        </div>
        <div className='my-3 text-center' style={{ marginBottom: '-0.90rem' }}>
          <a href="/upload/PhotographCommercial">
            <button className="mt-4 text-white bg-[#361500] rounded-lg hover:bg-[#5f2703] flex justify-between items-center overflow-hidden w-full">
              <span className="px-4">Photograph Commercial</span>
              <div className="rounded-lg overflow-hidden w-16 flex justify-center">
                <img className='w-8 my-1 rounded-lg overflow-hidden' src='../../public/camera.png' alt='Photograph Commercial' />
              </div>
            </button>
          </a>
        </div>
        <div className='my-3 text-center' style={{ marginBottom: '-0.90rem' }}>
          <a href="/upload/AdvertisementJournal">
            <button className="mt-4 text-white bg-[#361500] rounded-lg hover:bg-[#5f2703] flex justify-between items-center overflow-hidden w-full">
              <span className="px-4">Advertisement Journal</span>
              <div className="rounded-lg overflow-hidden w-16 flex justify-center">
                <img className='w-8 my-1 rounded-lg overflow-hidden' src='../../public/agendas.png' alt='Advertisement Journal' />
              </div>
            </button>
          </a>
        </div>
        <div className='my-3 text-center' style={{ marginBottom: '-0.90rem' }}>
          <a href="/upload/ArticleNewspaper">
            <button className="mt-4 text-white bg-[#361500] rounded-lg hover:bg-[#5f2703] flex justify-between items-center overflow-hidden w-full">
              <span className="px-4">Article Newspaper</span>
              <div className="rounded-lg overflow-hidden w-16 flex justify-center">
                <img className='w-8 my-1 rounded-lg overflow-hidden' src='../../public/application.png' alt='Article Newspaper' />
              </div>
            </button>
          </a>
        </div>
        <div className='my-3 text-center' style={{ marginBottom: '-0.90rem' }}>
          <a href="/upload/SaleBrochure">
            <button className="mt-4 text-white bg-[#361500] rounded-lg hover:bg-[#5f2703] flex justify-between items-center overflow-hidden w-full">
              <span className="px-4">Sales Brochure</span>
              <div className="rounded-lg overflow-hidden w-16 flex justify-center">
                <img className='w-8 my-1 rounded-lg overflow-hidden' src='../../public/sales.png' alt='Sales Brochure' />
              </div>
            </button>
          </a>
        </div>
        <div className='my-3 text-center' style={{ marginBottom: '-0.90rem' }}>
          <a href="/upload/SaleRecord">
            <button className="mt-4 text-white bg-[#361500] rounded-lg hover:bg-[#5f2703] flex justify-between items-center overflow-hidden w-full">
              <span className="px-4">Sales Record</span>
              <div className="rounded-lg overflow-hidden w-16 flex justify-center">
                <img className='w-8 my-1 rounded-lg overflow-hidden' src='../../public/acquisition.png' alt='Sales Record' />
              </div>
            </button>
          </a>
        </div>
        <div className='my-3 text-center' style={{ marginBottom: '-0.90rem' }}>
          <a href="/upload/ArticleJournal">
            <button className="mt-4 text-white bg-[#361500] rounded-lg hover:bg-[#5f2703] flex justify-between items-center overflow-hidden w-full">
              <span className="px-4">Article Journal</span>
              <div className="rounded-lg overflow-hidden w-16 flex justify-center">
                <img className='w-8 my-1 rounded-lg overflow-hidden' src='../../public/copywriting.png' alt='Article Journal' />
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Upload;
