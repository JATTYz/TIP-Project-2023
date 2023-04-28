import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebaseConfig'
import { collection, doc, getDocs, getDoc, where, query } from 'firebase/firestore'
import DialogButton from './DialogButton';
import AlertText from './AlertText';
import EditButton from './EditButton';
import { Input } from '@mui/material';

const AllDocuments = () => {


    const [currentID, setCurrentId] = useState();
    const [id, setId] = useState([]);
    const [type, setType] = useState([]);
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [date, setDate] = useState([]);
    const [isOpen, setIsOpen] = useState(true);   
    const [isAlertApprove, setIsAlertApprove] = useState(false)
    const [isStringApprove, setIsStringApprove] = useState()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

    async function getTest(){

    const q = query(collection(db, "raac-collection"), where("isApprove", "==", true));
    const docRef = await getDocs(q);
    setId([]);
    setType([]);
    setTitle([]);
    setDescription([]);
    setDate([]);

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
    }, [isAlertApprove])

    const [popTitleDoc, setPopTitleDoc ] = useState();
    const [popTypeDoc, setPopTypeDoc] = useState();
    const [popSubjectDoc, setPopSubjectDoc] = useState();
    const [popSourceDoc, setPopSourceDoc] = useState();
    const [popRightsDoc, setPopRightsDoc] = useState();
    const [popRelationDoc, setPopRelationDoc] = useState();
    const [popPublisherDoc, setPopPublisherDoc] = useState();
    const [popLanguageDoc, setPopLanguageDoc] = useState();
    const [popIdentifierDoc, setPopIdentifierDoc] = useState();
    const [popFormatDoc, setPopFormatDoc] = useState();
    const [popDescriptionDoc, setPopDescriptionDoc] = useState();
    const [popDateDoc, setPopDateDoc] = useState();
    const [popCreatorDoc, setPopCreatorDoc] = useState();
    const [popCoverateDoc, setPopCoverageDoc] = useState();
    const [popUrl, setPopUrl] = useState();
    const [popContributionDoc, setPopContributionDoc] = useState();
    const [isPopLoading, setIsPopLoading] = useState(true);

    const popUpCard = async (docId) => {
      setIsPopLoading(true)
      setIsOpen(false)
      const docRef = await getDoc(doc(db, "raac-collection",docId))
      if(docRef.exists()){

      setPopTitleDoc(docRef.data().title)
      setPopTypeDoc(docRef.data().type)
      setPopSubjectDoc(docRef.data().subject)
      setPopSourceDoc(docRef.data().source)
      setPopRightsDoc(docRef.data().rights)
      setPopRelationDoc(docRef.data().relation)
      setPopPublisherDoc(docRef.data().publisher)
      setPopLanguageDoc(docRef.data().language)
      setPopIdentifierDoc(docRef.data().identifier)
      setPopFormatDoc(docRef.data().format)
      setPopDescriptionDoc(docRef.data().description)
      setPopDateDoc(docRef.data().date)
      setPopCreatorDoc(docRef.data().creator)
      setPopUrl(docRef.data().url)
      setPopCoverageDoc(docRef.data().coverage)
      setPopContributionDoc(docRef.data().contribution)
      }else{
        console.log("CAN'T FIND");
      }
      setIsPopLoading(false)
      setCurrentId(docId)
    }

    const popUpData = [
      {title: "Type", value: popTypeDoc},
      {title: "Title", value: popTitleDoc},
      {title: "Subject", value: popSubjectDoc},
      {title: "Source", value: popSourceDoc},
      {title: "Rights", value: popRightsDoc},
      {title: "Relatio", value: popRelationDoc},
      {title: "Publisher", value: popPublisherDoc},
      {title: "Language", value: popLanguageDoc},
      {title: "Identifier", value: popIdentifierDoc},
      {title: "Format", value: popFormatDoc},
      {title: "Description", value: popDescriptionDoc},
      {title: "Date", value: popDateDoc},
      {title: "Creator", value: popCreatorDoc},
      {title: "Coverage", value: popCoverateDoc},
      {title: "Contribution", value: popContributionDoc},
    ]

    const handleClosePopup = (child) => {
      setIsOpen(child)
      console.log(child);
    } 

    const handleDialogAlert = (child) => {
      setIsAlertApprove(child)
    }

    const handleCloseFullInfo = () => {
      setIsOpen(!isOpen)
      setPopUrl()
    }

    const handleStringApprove = (child) => {
      setIsStringApprove(child)
    } 

  return (
    <div>
      {isLoading? (
        <div className='w-full h-screen relative'>
            <div className="absolute top-1/3 left-1/2  h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"role="status"></div>
            <h1 className='absolute top-1/3 left-1/2 mt-10 -ml-6 font-bold text-2xl'>Loading...</h1>
        </div>
        ): (<>
          {
            isAlertApprove && <AlertText isApproveAction={setIsAlertApprove} type={isStringApprove}/> 
          }

        <div className={`bg-[#CCB39C] shadow-xl  ${isOpen && "hidden"} rounded-xl w-full  px-10`}>
          <div className='flex justify-between pt-6'>
           <h1 className="mb-2 text-3xl font-bold tracking-tight text-black ">Edit Document</h1>
           <button 
           onClick={() => handleCloseFullInfo()}
           className="w-40 text-white font-bold bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Close</button>
          </div>
          <div className='flex w-full justify-center'>
            <div>
                <img src={popUrl} alt="" width={600} className='my-10'/> 
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {isPopLoading ? (
             <div className='w-full h-screen'>
                <div className="absolute top-1/2 left-1/2  h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"role="status"> </div>
                <h1 className='absolute top-1/2 left-1/2 mt-10 -ml-6 font-bold text-2xl'>Loading...</h1>
             </div>
          ) : 
          
          popUpData.map((doc, index) => (

            <div key={index} className="w-full text-white divide-gray-700 bg-slate-200 rounded-lg p-6 my-6">
              <h1 className="mb-3 text-zinc-900 font-bold text-2xl">Edit {doc.title}:</h1>
              {/* <Input className='w-full border-solid' size="lg" variant="solid" color="primary" defaultValue={doc.value}/> */}
              {/* <Input placeholder="Type in here…" variant="soft" defaultValue={doc.value} /> */}
              <input type="text" defaultValue={doc.value} class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
          ))
          }
          </div>
         <div className='flex justify-center'>
          <div className='my-3 mx-3'>
          <EditButton buttonType="edit" id={currentID} onClose={handleClosePopup} onAlert={handleDialogAlert} approveType={handleStringApprove}/>
          </div>
          <div className='my-3 mx-3'>

          <EditButton buttonType="clear" id={currentID} onClose={handleClosePopup} onAlert={handleDialogAlert} approveType={handleStringApprove}/>
          </div>
         </div>
        </div>


        <div className={`flex flex-col ${!isOpen && "hidden"}`}>
        <div className="overflow-x-auto">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-6">
        <div className="border-4 rounded-lg border-[#C7AC93]">
        <table className="min-w-full text-left text-sm font-light ">
          <thead className="border-2 font-medium ">
            <tr>
              <th scope="col" className="px-6 py-4">#Doc</th>
              <th scope="col" className="px-6 py-4">Type</th>
              <th scope="col" className="px-6 py-4">Title</th>
              <th scope="col" className="px-6 py-4">Description</th>
              <th scope="col" className="px-6 py-4">Date</th>
              <th scope="col" className="px-6 py-6">Edit</th>
            </tr>
          </thead>
          <tbody>
           {id.map((docId,index)=>(
              <tr
              key={index}
              className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300">

              <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
              <td className="whitespace-nowrap px-6 py-4">{type[index]}</td>
              <td className="whitespace-nowrap px-6 py-4">{title[index]}</td>
              <td className="whitespace-nowrap px-6 py-4">{description[index]}</td>
              <td className="whitespace-nowrap px-6 py-4">{date[index]}</td>
              <td className="whitespace-nowrap px-6 py-4">
                <button
                onClick={() => popUpCard(docId)} 
                className="w-32 bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded"
                >
                EDIT
                </button>
              </td>
            </tr>
            ))} 
            </tbody>
            </table>
            {
              id.length === 0 && <h1 className='text-center my-6 font-bold text-4xl'>EMPTY LIST</h1>
            }
            </div>
            </div>
            </div>
        </div>
    </>)

}
   
</div>
  )
}

export default AllDocuments

