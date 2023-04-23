import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebaseConfig'
import { collection, doc, getDocs, getDoc, updateDoc } from 'firebase/firestore'

const ApprovalTable = () => {


    const [currentID, setCurrentId] = useState();
    const [id, setId] = useState([]);
    const [type, setType] = useState([]);
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [date, setDate] = useState([]);
    const [isOpen, setIsOpen] = useState(true);   

    const [isAlertApprove, setIsAlertApprove] = useState(true)
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

      setCurrentId(docId)
      )
      setIsAlertApprove(false)
    }

    const rejectDoc = async (docId) => {
      const docRef = doc(db, "raac-collection", docId);
      await updateDoc(docRef, {isApprove: false}).then(
        alert("SUCCESSFULLY REJECTED DOCUMENT")
      )  
    }


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
    const [popContributionDoc, setPopContributionDoc] = useState();
    const [isPopLoading, setIsPopLoading] = useState(true);

    const popUpCard = async (docId) => {
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

    const approveDocFromPop = async (docId) => {
      const docRef = doc(db, "raac-collection", docId);
      await updateDoc(docRef, {isApprove: true}).then(
        setIsAlertApprove(false)
      )  
      setIsOpen(true)
      window.scrollTo({ top: 0});
    }

    const rejectDocFromPop = async (docId) => {
      const docRef = doc(db, "raac-collection", docId);
      await updateDoc(docRef, {isApprove: false}).then(
        alert("SUCCESSFULLY REJECTED DOCUMENT")
      )  
    }


    const alertText = () => {
      return (
        <div id="alert-border-3" className={`${isAlertApprove && "hidden"} rounded-lg flex p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800`} role="alert">
        <svg className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <div className="ml-3 text-sm font-medium">
            You have successfully approved the document with id: {currentID}
        </div>
          <button 
          onClick={() => setIsAlertApprove(true)}
          type="button" 
          className="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"  data-dismiss-target="#alert-border-3" aria-label="Close">
            <span className="sr-only">Dismiss</span>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
      </div>
      )

    }

  return (
    <div>
      {isLoading? (
        <div className='w-full h-screen relative'>
            <div className="absolute top-1/3 left-1/2  h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"role="status"></div>
            <h1 className='absolute top-1/3 left-1/2 mt-10 -ml-6 font-bold text-2xl'>Loading...</h1>
        </div>
        ): (<>
          {alertText()} 
         <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 justify-items-center my-6">
            <div className="p-5 bg-white rounded-lg  dark:bg-amber-800 w-48  shadow-lg shadow-amber-950">
              <div className="flex">
                <img src="../../public/pending.png" className="w-14  h-12 mr-4" />
                <div className="text-xl dark:text-gray-300 font-extrabold">Total Pending</div>
              </div>
                <div className="items-center pt-1">
                    <div className="text-2xl font-bold  text-gray-100 pt-4">{id.length + 1}</div>
                </div>
            </div>
            <div className="p-5 bg-white rounded-lg dark:bg-amber-800 w-48 shadow-lg shadow-amber-950">
              <div className="flex">
                <img src="../../public/trend.png" className="w-14 mr-4 h-12" />
                <div className="text-xl  text-gray-300 font-extrabold">Trend Type</div>
              </div>
                <div className="flex items-center pt-1">
                    <div className="text-2xl font-bold  text-gray-100 pt-4">Annoucement</div>
                </div>
            </div>

            <div className="p-5 bg-white rounded-lg dark:bg-amber-800 w-48 shadow-lg shadow-amber-950">
              <div className="flex">
                <img src="../../public/update.png" className="w-14 mr-4 h-12" />
                <div className="text-xl font-extrabold text-gray-300 ">Recent Uploaded</div>
              </div>
                <div className="flex items-center pt-1">
                    <div className="text-2xl font-bold  text-gray-100 pt-4">22/04/2023</div>
                </div>
            </div>
        </div>

        <div className={`bg-blue-500 shadow-2xl shadow-blue-500/50 ${isOpen && "hidden"} rounded-xl w-full ring-blue-800 ring-4 px-10`}>
          <div className='flex justify-between pt-6'>
           <h1 className="mb-2 text-3xl font-bold tracking-tight text-white ">Document Upload Details</h1>
           <button 
           onClick={() => setIsOpen(!isOpen)}
           className="text-white font-bold bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Close</button>
          </div>
         <img src="../../public/approve.png" alt="" width={100} className='my-10'/> 

          {isPopLoading? (
             <div className='w-full h-screen'>
                <div className="absolute top-1/2 left-1/2  h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"role="status"> </div>
                <h1 className='absolute top-1/2 left-1/2 mt-10 -ml-6 font-bold text-2xl'>Loading...</h1>
             </div>
          ) : popUpData.map((doc, index) => (
              <dl key={index} className="w-full  divide-y  text-white divide-gray-700 bg-slate-500 rounded-lg p-6 my-6">
              <div className="flex flex-col py-3">
                  <dt className="mb-1 text-gray-800 font-bold">{doc.title}</dt>
                  <dd className="text-lg font-semibold">{doc.value}</dd>
              </div>
              
          </dl>
          ))}

         <div className='flex justify-center'>
          <div>
          <button 
          onClick={()=> approveDocFromPop(currentID)} 
          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Approve</button>
          </div>
          <div>
          <button  
          onClick={()=> rejectDocFromPop(currentID)} 
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Reject</button>
          </div>
         </div>
        </div>


        <div className={`flex flex-col ${!isOpen && "hidden"}`}>
        <div className="overflow-x-auto">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-6">
        <div className="border-4 rounded-lg border-gray-300">
        <table className="min-w-full text-left text-sm font-light ">
          <thead className="border-2 font-medium ">
            <tr>
              <th scope="col" className="px-6 py-4">#Doc</th>
              <th scope="col" className="px-6 py-4">Type</th>
              <th scope="col" className="px-6 py-4">Title</th>
              <th scope="col" className="px-6 py-4">Description</th>
              <th scope="col" className="px-6 py-4">Date</th>
              <th scope="col" className="px-6 py-6">Full Info</th>
              <th scope="col" className="px-6 py-4">Approval</th>
            </tr>
          </thead>
          <tbody>
           {id.map((docId,index)=>(
              <tr
              className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300">

              <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
              <td className="whitespace-nowrap px-6 py-4">{type[index]}</td>
              <td className="whitespace-nowrap px-6 py-4">{title[index]}</td>
              <td className="whitespace-nowrap px-6 py-4">{description[index]}</td>
              <td className="whitespace-nowrap px-6 py-4">{date[index]}</td>
              <td className="whitespace-nowrap px-6 py-4">
                <button
                onClick={() => popUpCard(docId)} 
                >
                <img src="/public/dots.png" alt="" className='h-5 w-auto' />
                </button>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <button 
                onClick={ () => approveDoc(docId)}
                className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded mr-3">
                Approve
                </button>
                <button 
                onClick={ () => rejectDoc(docId)}
                className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded mr-3">
                Reject
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded">
                Need More Info
                </button>
              </td>
            </tr>
            ))} 
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

