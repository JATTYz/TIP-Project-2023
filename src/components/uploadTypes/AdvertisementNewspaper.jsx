import React, { useState } from 'react'
import { db, storage } from '../../firebase/firebaseConfig'
import { collection, doc, getDocs, getDoc, updateDoc,addDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL, uploadBytesResumable } from 'firebase/storage';

const AdvertisementNewspaper = () => {
  const [coverage, setCoverage] = useState()
  const [title, setTitle] = useState()
  const [date, setDate] = useState()
  const [contribution, setContribution] = useState()
  const [description, setDescription] = useState()
  const [file, setFile] = useState()



   const metadata = {
     contentType: 'image/jpeg'
   };

   const uploadImage = () => {
       
       if (file == null) return;
       const imageRef = ref(storage, `images/${file.name + "TIPg2-2023"}`)
       const uploadTask = uploadBytesResumable(imageRef, file, metadata);

       uploadTask.on('state_change', (snapshot) => {

         switch(snapshot.state){
           case 'paused':
           console.log('Upload is paused');
           break;
           case 'running':
           console.log('Upload is running');
           break;
         }

       },(error) => {
           switch (error.code) {
                 case 'storage/unauthorized':
                   break;
                 case 'storage/canceled':
                   break;
                 case 'storage/unknown':
                   break;
   }
       }, () => {
           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
               console.log('File available at', downloadURL);
               uploadData(downloadURL)
             });
       })
   }

   const uploadData = async (url) => {

   const current = new Date();
   const dateNow = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

   await addDoc(collection(db,"raac-collection"), {
       type: "AdvertisementNewspaper",
       coverage: coverage,
       title: title,
       date: dateNow,
       contribution: contribution,
       description: description,
       isApprove: false,
       isPending: true,
       url: url
   });
   }


  const handleCoverage = (e)=>{
   setCoverage(e.target.value)
  }

  const handleTitle = (e)=>{
   setTitle(e.target.value)
  }

  const handleDescription = (e)=>{
   setDescription(e.target.value)
  }

  const handleDate = (e) => {
   setDate(e.target.value)
  }

  const handleContribution = (e) => {
   setContribution(e.target.value)
  }

  const handleFileChange = (e) => {
   setFile(e.target.files[0])
  }

  const handleSubmit = (e) => {  
  if (coverage && title && date && contribution && description && file) {
   e.preventDefault()
   uploadImage()
   console.log(coverage);
   console.log(title);
   console.log(date);
   console.log(contribution);
   console.log(description);
   console.log(file);

   alert("Successfully uploaded the data!");
  } else {
    // Display an error message if required fields are empty
    alert("Please fill in all the required fields.");
  }
  }

  return (
<div className="flex justify-center  h-screen">
  <div className="w-full max-w-3xl">
    <h2 className="text-xl text-rv100 text-center font-semibold mb-4 mt-3">Please enter the following information</h2>
    <form className="justify-center text-lg">
        <div className="flex flex-wrap -mx-3 mb-6 mt-7">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-rv100 text-sm font-bold mb-2" htmlFor="Coverage">
              Coverage
            </label>
            <input
              className="appearance-none block w-full bg-[#C6ACB5] text-white border border-rv100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[C6ACB5] focus:border-rv100"
              id="Coverage"
              name="Coverage"
              onChange={handleCoverage}
            />
   
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-rv100 text-sm font-bold mb-2" htmlFor="Title">
              Title
            </label>
            <input
              className="appearance-none block w-full bg-[#C6ACB5] text-white border border-rv100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[C6ACB5] focus:border-rv100"
              id="Title"
              type="text"
              name="Title"
              onChange={handleTitle}          
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">

        <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-rv100 text-sm font-bold mb-2" htmlFor="Date">
              Date
            </label>
            <input
              className="appearance-none block w-full bg-[#C6ACB5] text-white border border-rv100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[C6ACB5] focus:border-rv100"
              id="Date"
              type="date"
              name="Date"
              onChange={handleDate}
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-rv100 text-sm font-bold mb-2" htmlFor="Contribution">
              Contribution
            </label>
            <input
              className="appearance-none block w-full bg-[#C6ACB5] text-white border border-rv100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[C6ACB5] focus:border-rv100"
              id="Contribution"
              type="text"
              name="Contribution"
              onChange={handleContribution}

            />
          </div>

          <div className="w-full  px-3 mt-4">
            <label className="block uppercase tracking-wide text-rv100 text-sm font-bold mb-2" htmlFor="Description">
              Description
            </label>
            <textarea
              className="appearance-none block w-full bg-[#C6ACB5] text-white border border-rv100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[C6ACB5] focus:border-rv100"
              id="Description"
              name="Description"
              onChange={handleDescription}
            />
          </div>

          <div className="w-full  px-3 mt-4">
          <label className="block uppercase tracking-wide text-rv100 text-sm font-bold mb-2" htmlFor="file-upload">
        Choose a file to upload:
      </label>
      <div className="flex items-center">
        <input
          className="hidden border border-361500"
          type="file"
          id="file-upload"
          onChange={handleFileChange}
        />
        <label
          className="border border-[#361500] border-solid border-4 rounded-lg px-4 py-2 mr-4 text-rv100"
          htmlFor="file-upload"
        >
          {file ? file.name: 'Choose File'}
        </label>
        {file && (
          <button
            className="text-rv100 hover:text-red-700 font-bold"
            onClick={() => setSelectedFile(null)}
          >
            Clear
          </button>
        )}
      </div>
          </div>
        </div>

        <div className="flex justify-start">
            <button
              type="submit"
              className="mr-2 bg-[#361500] text-white px-4 py-2 rounded-lg w-1/5"
              onClick={(e)=> handleSubmit(e)}
            >
              Submit
            </button>
    </div>
  </form>
    </div>
    </div>
  )
}

export default AdvertisementNewspaper