import './styles/global.css';
import { AiOutlineSearch } from 'react-icons/ai';
import React, { useState } from 'react';
import { BiFilter } from 'react-icons/bi';
import { collection, query, getDocs, where} from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'
import { Select } from '@mantine/core';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const [id, setId] = useState([]);
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [date, setDate] = useState([]);
  const [url, setURL] = useState([]);

  const handleSearch = async () => {
    // Clean data in the arrays before store new data
    setId([]);
    setTitle([]);
    setDescription([]);
    setDate([]);


      const docRef = collection(db,"raac-collection") 
      if (selectedOption !== "") {
        const q = query( docRef,
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



       // Can you implement the default search?
       // e.g. when the searchQuery does not match anything, display everything match type

       if(doc.size == 0) {
        console.log("DOES NOT EXIST");
       }

      } else {

        // this can be another default search when the user just hit enter
        // e.g. we can display photograph as a default
        console.log("HELLO");
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
        <div>
          
          {/* this maps value in the id variable */}
          { id.map((doc, index) => (
            <div key={index}>

                  <Card shadow="sm" padding="lg" radius="md" withBorder>
                        <Card.Section>
                          <Image
                            src= {url[index]}
                            alt="PICTURE"
                          />
                        </Card.Section>

                        <Group position="apart" mt="md" mb="xs">
                          <Text weight={500}>{title[index]}</Text>
                        </Group>

                        <Text size="sm" color="dimmed">
                          Description: {description[index]}
                        </Text>

                        <Text size="sm" color="dimmed">
                          Date: {date[index]}
                        </Text>

                  </Card>

            </div>
          )) }



        </div>
      </div>
    </div>
  );
};

export default SearchBar;
