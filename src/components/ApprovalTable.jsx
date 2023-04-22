import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebaseConfig'
import { collection, doc, getDocs, getDoc, updateDoc } from 'firebase/firestore'

const ApprovalTable = () => {

    const [id, setId] = useState([]);
    const [type, setType] = useState([]);
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [date, setDate] = useState([]);
    const [isOpen, setIsOpen] = useState(true);   

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

    async function getTest(){
    const docRef = await getDocs(collection(db, "raac-collection"))
    docRef.forEach((doc) => {
        setId((prev) => [...prev, doc.id])
        setType((prev) => [...prev, doc.data().type])
        setTitle((prev) => [...prev, doc.data().title])
        setDescription((prev) => [...prev, doc.data().description])
        setDate((prev) => [...prev, doc.data().date])
    })
    setIsLoading(false)
    }

    getTest()
    }, [])

    const approveDoc = async (docId) => {
      const docRef = doc(db, "raac-collection", docId);
      await updateDoc(docRef, {isApprove: true}).then(
        alert("SUCCESSFULLY UPDATED")
      )  
    }

    const rejectDoc = async (docId) => {
      const docRef = doc(db, "raac-collection", docId);
      await updateDoc(docRef, {isApprove: false}).then(
        alert("SUCCESSFULLY REJECTED DOCUMENT")
      )  
    }


    const [popTitleDoc, setPopTitleDoc ] = useState();

    const popUpCard = async (docId) => {
      setIsOpen(true)
      const docRef = await getDoc(doc(db, "raac-collection",docId))
      if(docRef.exists()){

      setPopTitleDoc(docRef.data().title)
      }else{
        console.log("CAN'T FIND");
      }
      console.log("GOOD");
    }

  return (
    <div>
{isLoading? (
        <div className="absolute top-1/2 left-1/2  h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"role="status"> </div>
        ): (<>

        <div className={`bg-blue-500 shadow-lg shadow-blue-500/50 ${!isOpen && "hidden"} rounded-xl w-full`}>
          <div className='flex justify-between px-6 pt-6'>
           <h1 className="mb-2 text-3xl font-bold tracking-tight text-white ">Document Upload Details</h1>
           {/* <button className='bg-orange-700' >test</button> */}
           <button 
           onClick={() => setIsOpen(!isOpen)}
           className="text-white font-bold bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Close</button>
          </div>
         <img src="../../public/approve.png" alt="" width={100}/> 



<div className="flex my-10 w-full justify-center p-4 rounded-lg shadow  bg-gray-800 border-gray-700">
  <h1 className='text-white text-center'>{popTitleDoc}</h1>
   {/* <div className="grid grid-cols-2 justify-items-stretch">
        <ul role="list" className="divide-gray-700 ">
            <li className="py-3 sm:py-4 ">
                <div className="grid grid-cols-2 justify-items-center">
                    <div className="">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Neil Sims
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div className="text-base font-semibold text-gray-900 dark:text-white">
                        $320234
                    </div>

                </div>
            </li>
            </ul>
   </div> */}
</div>

         {/* <div className='text-white'>
          <h1>FF</h1>
          <h1>FF</h1>
          <h1>FF</h1>
          <h1>FF</h1>
          <h1>FF</h1>
          <h1>FF</h1>
          <h1>FF</h1>
         </div> */}
         <div className='flex justify-center'>
          <div>
          <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Approve</button>
          </div>
          <div>
          <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Reject</button>
          </div>
         </div>
        </div>

        <div className={`flex flex-col ${isOpen && "hidden"}`}>
        {/* <div className={`flex flex-col`}> */}
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
                <button
                onClick={() => popUpCard(id[0])} 
                >
                <img src="/public/dots.png" alt="" className='h-5' />
                </button>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <button 
                onClick={ () => approveDoc(id[0])}
                className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded mr-3">
                Approve
                </button>
                <button 
                onClick={ () => rejectDoc(id[0])}
                className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded mr-3">
                Reject
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded">
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

