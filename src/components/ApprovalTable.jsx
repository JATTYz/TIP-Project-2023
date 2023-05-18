import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebaseConfig'
import { collection, doc, getDocs, getDoc, where, query } from 'firebase/firestore'
import DialogButton from './DialogButton';
import AlertText from './AlertText';

const ApprovalTable = () => {


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

    const q = query(collection(db, "raac-collection"), where("isPending", "==", true));
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

    const [popTitleDoc, setPopTitleDoc ] = useState("N/A");
    const [popTypeDoc, setPopTypeDoc] = useState("N/A");
    const [popSubjectDoc, setPopSubjectDoc] = useState("N/A");
    const [popSourceDoc, setPopSourceDoc] = useState("N/A");
    const [popRightsDoc, setPopRightsDoc] = useState("N/A");
    const [popRelationDoc, setPopRelationDoc] = useState("N/A");
    const [popPublisherDoc, setPopPublisherDoc] = useState("N/A");
    const [popLanguageDoc, setPopLanguageDoc] = useState("N/A");
    const [popIdentifierDoc, setPopIdentifierDoc] = useState("N/A");
    const [popFormatDoc, setPopFormatDoc] = useState("N/A");
    const [popDescriptionDoc, setPopDescriptionDoc] = useState("N/A");
    const [popDateDoc, setPopDateDoc] = useState("N/A");
    const [popCreatorDoc, setPopCreatorDoc] = useState("N/A");
    const [popCoverateDoc, setPopCoverageDoc] = useState("N/A");
    const [popUrl, setPopUrl] = useState("N/A");
    const [popContributionDoc, setPopContributionDoc] = useState("N/A");
    const [isPopLoading, setIsPopLoading] = useState(true);

    const popUpCard = async (docId) => {
      setIsPopLoading(true)
      setIsOpen(false)
      const docRef = await getDoc(doc(db, "raac-collection",docId))
      if(docRef.exists()){
      
        if(docRef.data().title =! ""){
        setPopTitleDoc(docRef.data().title)
        }

        if(docRef.data().type =! "") {
        setPopTypeDoc(docRef.data().type)
        }
        if(docRef.data().subject) {
        setPopSubjectDoc(docRef.data().subject)
        }
        if(docRef.data().source) {
        setPopSourceDoc(docRef.data().source)
        }
        if(docRef.data().rights) {
        setPopRightsDoc(docRef.data().rights)
        }
        if(docRef.data().relation) {
        setPopRelationDoc(docRef.data().relation)
        }
        if(docRef.data().publisher) {
        setPopPublisherDoc(docRef.data().publisher)
        }
        if(docRef.data().language) {
        setPopLanguageDoc(docRef.data().language)
        }
        if(docRef.data().identifier) {
        setPopIdentifierDoc(docRef.data().identifier)
        }
        if(docRef.data().format) {
        setPopFormatDoc(docRef.data().format)
        }
        if(docRef.data().description) {
        setPopDescriptionDoc(docRef.data().description)
        }
        if(docRef.data().date) {
        setPopDateDoc(docRef.data().date)
        }
        if(docRef.data().creator) {
        setPopCreatorDoc(docRef.data().creator)
        }
        if(docRef.data().url) {
        setPopUrl(docRef.data().url)
        }
        if(docRef.data().coverage) {
        setPopCoverageDoc(docRef.data().coverage)
        }
        if(docRef.data().contribution) {
        setPopContributionDoc(docRef.data().contribution)
        }
      
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
         <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-5 justify-items-center my-6">
            <div className="p-5  rounded-lg  bg-[#361500] w-48  shadow-lg shadow-amber-950">
              <div className="flex">
                <img src="../../public/pending.png" className="w-14  h-12 mr-4" />
                <div className="text-xl text-gray-300 font-extrabold">Total Pending</div>
              </div>
                <div className="items-center pt-1">
                    <div className="text-2xl font-bold  text-gray-100 pt-4">{ id.length == 0 ? 0 : id.length}</div>
                </div>
            </div>

            <div className="p-5  rounded-lg bg-[#361500] w-48 shadow-lg shadow-amber-950">
              <div className="flex">
                <img src="../../public/update.png" className="w-14 mr-4 h-12" />
                <div className="text-xl font-extrabold text-gray-300 ">Recent Uploaded</div>
              </div>
                <div className="flex items-center pt-1">
                   <div className="text-2xl font-bold  text-gray-100 pt-4">19/05/2023</div>
                </div>
            </div>
        </div>

        <div className={`bg-[#CCB39C] shadow-xl  ${isOpen && "hidden"} rounded-xl w-full  px-10`}>
          <div className='flex justify-between pt-6'>
           <h1 className="mb-2 text-3xl font-bold tracking-tight text-black ">Document Upload Details</h1>
           <button 
           onClick={() => handleCloseFullInfo()}

           className="w-40 text-white font-bold bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Close</button>
          </div>
          <div className='flex w-full justify-center'>
            <div>
                <img src={popUrl} alt="" width={500} className='my-10'/> 
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


            <div key={index} className="w-full text-white divide-gray-700 bg-[#A25418] rounded-lg p-6 my-6">
              <h1 className="mb-3 text-zinc-900 font-bold text-2xl">{doc.title}:</h1>
              <h1 className="text-xl font-semibold">{doc.value}</h1>
            </div>
          ))
          }
          </div>
         <div className='flex justify-center'>
          <div className='my-3 mx-3'>
          <DialogButton buttonType="approve" id={currentID} onClose={handleClosePopup} onAlert={handleDialogAlert} approveType={handleStringApprove}/>
          </div>
          <div className='my-3 mx-3'>

          <DialogButton buttonType="reject" id={currentID} onClose={handleClosePopup} onAlert={handleDialogAlert} approveType={handleStringApprove}/>
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
              <th scope="col" className="px-6 py-6">Full Info</th>
              <th scope="col" className="px-6 py-4">Approval</th>
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
                >
                <img src="/public/dots.png" alt="" className='h-5 w-auto' />
                </button>
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className='flex'>
                <DialogButton id={docId} buttonType="approve"  onAlert={handleDialogAlert} onClose={handleClosePopup} approveType={handleStringApprove}/>
                <DialogButton id={docId} buttonType="reject"   onAlert={handleDialogAlert} onClose={handleClosePopup} approveType={handleStringApprove}/>
                </div>
                {/* <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded">
                Need More Info
                </button> */}
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

export default ApprovalTable

