import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

const ApprovalTable = () => {

    const [type, setType] = useState([]);
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [date, setDate] = useState([]);
   

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

    async function getTest(){
    const docRef = await getDocs(collection(db, "raac-collection"))
    docRef.forEach((doc) => {
        setType((prev) => [...prev, doc.data().type])
        setTitle((prev) => [...prev, doc.data().title])
        setDescription((prev) => [...prev, doc.data().description])
        setDate((prev) => [...prev, doc.data().date])
      
    })
    setIsLoading(false)
    }

    getTest()
    }, [])

  return (
    <div>
{isLoading? (
        <div className="absolute top-1/2 left-1/2  h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"role="status"> </div>
        ): (<>
        <div className="flex flex-col">
        <div className="overflow-x-auto">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-6">
        <div className="border-4 rounded-lg border-gray-300">
        <table className="min-w-full text-left text-sm font-light ">
          <thead className="border-2 font-medium ">
            <tr>
              <th scope="col" className="px-6 py-4">#id</th>
              <th scope="col" className="px-6 py-4">Type</th>
              <th scope="col" className="px-6 py-4">Title</th>
              <th scope="col" className="px-6 py-4">Description</th>
              <th scope="col" className="px-6 py-4">Date</th>
              <th scope="col" className="px-6 py-6">
                <img src="/public/dots.png" alt="" className='h-5 w-auto' />
              </th>
              <th scope="col" className="px-6 py-4">Approval</th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300">
              <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
              <td className="whitespace-nowrap px-6 py-4">{type[0]}</td>
              <td className="whitespace-nowrap px-6 py-4">{title[0]}</td>
              <td className="whitespace-nowrap px-6 py-4">{description[0]}</td>
              <td className="whitespace-nowrap px-6 py-4">Mark</td>
              <td className="whitespace-nowrap px-6 py-4">
                <button>
                <img src="/public/dots.png" alt="" className='h-5' />
                </button>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <button class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded mr-3">
                Approve
                </button>
                <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded mr-3">
                Reject
                </button>
                <button class="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded">
                Need More Info
                </button>
              </td>
            </tr>
            <tr
              className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300">
              <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
              <td className="whitespace-nowrap px-6 py-4">Mark</td>
              <td className="whitespace-nowrap px-6 py-4">{title[0]}</td>
              <td className="whitespace-nowrap px-6 py-4">TTSSTT</td>
              <td className="whitespace-nowrap px-6 py-4">Mark</td>
              <td className="whitespace-nowrap px-6 py-4">
                <button className='w-5'>
                <img src="/public/dots.png" alt="" className='h-5' />
                </button>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded mr-3">
                Approve
                </button>
                <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded mr-3">
                Reject
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded">
                Need More Info
                </button>
              </td>
            </tr>
            <tr
              className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300">
              <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
              <td className="whitespace-nowrap px-6 py-4">{title[0]}</td>
              <td className="whitespace-nowrap px-6 py-4">TTSSTT</td>
              <td className="whitespace-nowrap px-6 py-4">Mark</td>
              <td className="whitespace-nowrap px-6 py-4">Mark</td>
              <td className="whitespace-nowrap px-6 py-4">
                <button>
                <img src="/public/dots.png" alt="" className='h-5' />
                </button>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded mr-3">
                Approve
                </button>
                <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded mr-3">
                Reject
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded">
                Need More Info
                </button>
              </td>
            </tr>
            </tbody>
            </table>
            </div>
            </div>
            </div>
        </div>
    </>)

}
   

</div>
  )
}

export default ApprovalTable

