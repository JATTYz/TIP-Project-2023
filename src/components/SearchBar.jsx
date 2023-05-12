import './styles/global.css';
import { AiOutlineSearch } from 'react-icons/ai';
import React, { useState } from 'react';
import { BiFilter } from 'react-icons/bi';
import { collection, query, getDocs, where, and} from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'
import { Select } from '@mantine/core';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const handleSearch = async () => {
    try {
      let q = query(
        collection(db, "raac-collection"),
        where("isApprove", "==", true)
      );
      
      if (selectedOption !== '') {
        q = query(q, where("type", "==", selectedOption), where("description", "==", searchQuery));
      }

      else {
        q = query(q, where("description", "==", searchQuery));
      }
    
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => {
        const record = doc.data();
        return {
          title: record.title,
          description: record.description
        };
      });
      setResults(data);
      // window.location.href = `/search/${searchQuery}`;
      // navigate(`/search/${searchQuery}`);
      console.log(searchQuery);
    } catch (error) {
      console.error(error);
      setResults([]);
    }
  };

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    console.log(value);
  };
  
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
      console.log("enter was pressed successfully");
    }
  };

  return (
    <div className='grid grid-cols-6'>
      <span className='col-span-1' />

      <div className='col-span-1'>
        <img
          className='pr-10 my-10'
          src='/rccabadge.png'
          alt='rcca-badge'
        />
      </div>

      <div className='col-span-3'>
        <div className='text-6xl mt-20 pl-5'>Rover Car Club of Australia</div>
        <div className='text-3xl pl-40 pt-5'>
          Explore our Historical Records
        </div>
      </div>

      <span className='col-span-1' />

      <div className='col-span-6 px-60 pb-10'>
        <div className='relative mt-8'>
          <span className='absolute inset-y-0 left-0 flex items-center px-2'>
            <AiOutlineSearch className='text-white text-3xl' />
          </span>
          <input
            type='text'
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className='block w-full py-5 text-white rounded-2xl bg-[#1C0A00] border-transparent focus:border-gray-500 focus:ring-0 px-4 py-2 pl-12'
            placeholder='Search...'
          />
          <span className='absolute inset-y-0 right-0 flex items-center px-2'>
            <Select
              className='flex-shrink-0'
              placeholder='All Categories'
              icon={<BiFilter className='text-black text-3xl'/>}
              searchable
              maxDropdownHeight={120}
              onChange={handleOptionChange}
              data={[
                { value: 'AdvertisementJournal', label: 'Advertisement Journals' },
                { value: 'ArticleJournal', label: 'Article Journals' },
                { value: 'ArticleNewspaper', label: 'Article Newspapers' },
                { value: 'PhotographCommercial', label: 'Photographs' },
                { value: 'SaleRecord', label: 'Sale Records' },
                { value: 'SaleBrochure', label: 'Sale Brochures' },
                { value: '', label: 'No Selection' },
              ]}
            />
          </span>
        </div>
        <div className='mt-4'>
        {results.map((result, index) => (
            <div key={index} className='mt-10 mb-10'>
                <div className='text-3xl'>{result.title}</div>
                <div className='text-2xl mt-5 mx-10'>{result.description}</div>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
