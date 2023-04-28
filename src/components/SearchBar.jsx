import React, { useState, useEffect } from 'react'
import './styles/global.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiFilter } from 'react-icons/bi';

const SearchBar = () => {

    const data = [
        { id: 1, title: 'Lorem ipsum dolor sit amet', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 2, title: 'Sed do eiusmod tempor', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { id: 3, title: 'Ut enim ad minim veniam', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
        { id: 4, title: 'Duis aute irure dolor in reprehenderit', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    ];    

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchQueryChange = event => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        // Filter data based on search query
        const filteredData = data.filter(item => {
            return (
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.content.toLowerCase().includes(searchQuery.toLowerCase())
            );
        });
        setSearchResults(filteredData);
    }, [searchQuery]);


    return (
        <div className='grid grid-cols-6'>
            <span className='col-span-1' />

            <div className='col-span-1'>
		        <img 
                    className='pr-10 my-10' 
                    src="/rccabadge.png" 
                    alt="rcca-badge" 
                />
            </div>

            <div className='col-span-3'>
                <div className='text-6xl mt-20 pl-5'>Rover Car Club of Australia</div>
                <div className='text-3xl pl-40 pt-5'>Explore our Historical Records</div>

            </div>

            <span className='col-span-1' />

            <div className='col-span-6 px-40 pb-10'>
                <div className="relative mt-8">
                    <span className='absolute inset-y-0 left-0 flex items-center px-2'>
                        <AiOutlineSearch className='text-white text-3xl'/>
                    </span>                        
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchQueryChange}
                        className="block w-full py-5 text-white rounded-2xl bg-[#1C0A00] border-transparent focus:border-gray-500 focus:ring-0 px-4 py-2 pl-12"
                        placeholder="Search..."
                    />
                    <span className='absolute inset-y-0 right-0 flex items-center px-2'>
                        <BiFilter className='text-white text-3xl'/>
                    </span>  
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
