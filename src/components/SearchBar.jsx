import './styles/global.css';
import { AiOutlineSearch } from 'react-icons/ai';
import React, { useState } from 'react';
import { BiFilter } from 'react-icons/bi';
import { collection, query, getDocs, where} from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'
import { Select } from '@mantine/core';
import { Card, Image, Text, Group } from '@mantine/core';
import { IoIosArrowDown } from 'react-icons/io';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const [id, setId] = useState([]);
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [date, setDate] = useState([]);
  const [url, setURL] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async () => {
    // Clean data in the arrays before store new data
    setId([]);
    setTitle([]);
    setDescription([]);
    setDate([]);

      const docRef = collection(db,"raac-collection") 
      if (selectedOption !== "") {
        const q = query( docRef,
          where("isApprove", "==", true),
          where("type", "==", selectedOption),
          where("description", ">=", searchQuery),
        );

       const doc = await getDocs(q);
       doc.forEach((doc) => {
        setId((prev) => [...prev, doc.id])
        setTitle((prev) => [...prev, doc.data().title])
        setDescription((prev) => [...prev, doc.data().description])
        setDate((prev) => [...prev, doc.data().date])
        setURL((prev) => [...prev, doc.data().url])

       })

      if(doc.size == 0) {
        setErrorMessage("No results found.");
      } else {
        setErrorMessage("");
      }
      
      } else { // default search for when there is no type selected eg. the category function isn't used
        const q = query( docRef,
          where("isApprove", "==", true),
          where("description", ">=", searchQuery),
        );

        const doc = await getDocs(q);
        doc.forEach((doc) => {
         setId((prev) => [...prev, doc.id])
         setTitle((prev) => [...prev, doc.data().title])
         setDescription((prev) => [...prev, doc.data().description])
         setDate((prev) => [...prev, doc.data().date])
         setURL((prev) => [...prev, doc.data().url])
        })

        if(doc.size == 0) {
          setErrorMessage("No results found.");
        }
        else {
          setErrorMessage("");
        }
        
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

      <div className='col-span-4 text-center'>
        <div className='flex inline-flex'>
          <Image
            className='pr-7 mt-10'
            src='/rccabadge.png'
            alt='rcca-badge'
            maw={125} 
          />
          <div className='text-6xl mt-14'>
            Rover Car Club of Australia
          </div>
        </div>
        <div className='text-3xl'>
          Explore our Historical Records
        </div>
        <div className='flex justify-center pt-2'>
          <IoIosArrowDown className='text-5xl'/>
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
            className='block w-full py-5 text-white rounded-2xl bg-[#1C0A00] border-transparent focus:border-gray-500 focus:ring-0 px-4 pl-12'
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
                { value: 'AdvertisementNewspaper', label: 'Advertisement Newspaper' },
                { value: 'PhotographCommercial', label: 'Photographs' },
                { value: 'SaleRecord', label: 'Sale Records' },
                { value: 'SaleBrochure', label: 'Sale Brochures' },
                { value: '', label: 'No Selection' },
              ]}
            />
          </span>
        </div>
      </div>

    <div className='col-span-6'>
      <div className='grid grid-cols-3 px-20 gap-5'>
      {/* mapping query results to cards unless there is no results then show error msg*/}
      { errorMessage != "" ? (
        <div className='text-center pl-40 text-red-500'>{errorMessage}</div>
      ) : (
        id.map((doc, index) => (          
          <div key={index} className='col-span-1'>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section>
                      <Image
                        src= {url[index]}
                        alt="PICTURE"
                        width={480} 
                        height={400}
                      />
                    </Card.Section>

                    <Group position="apart" mt="md" mb="xs">
                      <Text fw={500} >{title[index]}</Text>
                    </Group>

                    <Text size="sm">
                      Date: {date[index]}
                    </Text>

                    <Text size="sm">
                      Description: {description[index]}
                    </Text>
              </Card>
          </div>
          )))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
