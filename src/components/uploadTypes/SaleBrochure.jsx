import React, { useState } from 'react'
import { db, storage } from '../../firebase/firebaseConfig'
import { collection, doc, getDocs, getDoc, updateDoc,addDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL, uploadBytesResumable } from 'firebase/storage';

const SaleBrochure = () => {
 
  const [title, setTitle] = useState()
  const [publisher, setPublisher] = useState()
  const [rights, setRights] = useState()
  const [language, setLanguage] = useState()
  const [description, setDescription] = useState()
  const [file, setFile] = useState()



   const metadata = {
     contentType: 'image/jpeg'
   };

   const uploadImage = () => {
       
       if (file == null) return;
       const imageRef = ref(storage, `images/${file.name + "TIPg2-2023"}`)
       const uploadTask = uploadBytesResumable(imageRef, file, file.type);

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
       type: "SaleBrochure",
       title: title,
       publisher: publisher,
       rights: rights,
       date: dateNow,
       language: language,
       description: description,
       isApprove: false,
       isPending: true,
       url: url
   });
   }


  const handleTitle = (e)=>{
   setTitle(e.target.value)
  }

  const handlePublisher = (e)=>{
   setPublisher(e.target.value)
  }

  const handleRights = (e)=>{
   setRights(e.target.value)
  }

  const handleLanguage = (e) => {
   setLanguage(e.target.value)
  }

  const handleDescription = (e) => {
   setDescription(e.target.value)
  }

  const handleFileChange = (e) => {
   setFile(e.target.files[0])
  }

  const handleSubmit = (e) => {

  if (title && rights && publisher && language && description && file) {

   e.preventDefault()
   uploadImage()
   console.log(title);
   console.log(rights);
   console.log(publisher);
   console.log(language);
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
            <label className="block uppercase tracking-wide text-rv100 text-sm font-bold mb-2" htmlFor="Title">
              Title
            </label>
            <input
              className="appearance-none block w-full bg-[#C6ACB5] text-white border border-rv100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[C6ACB5] focus:border-rv100"
              id="Title"
              name="Title"
              onChange={handleTitle}
            />
   
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-rv100 text-sm font-bold mb-2" htmlFor="Publisher">
              Publisher
            </label>
            <input
              className="appearance-none block w-full bg-[#C6ACB5] text-white border border-rv100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[C6ACB5] focus:border-rv100"
              id="Publisher"
              type="text"
              name="Publisher"
              onChange={handlePublisher}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">

        <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-rv100 text-sm font-bold mb-2" htmlFor="Rights">
              Rights
            </label>
            <input
              className="appearance-none block w-full bg-[#C6ACB5] text-white border border-rv100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[C6ACB5] focus:border-rv100"
              id="TitlRightse"
              type="text"
              name="Rights"
              onChange={handleRights}
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-rv100 text-sm font-bold mb-2" htmlFor="Language">
              Language
            </label>
            <input
              className="appearance-none block w-full bg-[#C6ACB5] text-white border border-rv100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-[C6ACB5] focus:border-rv100"
              id="Language"
              type="text"
              name="Language"
              onChange={handleLanguage}
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
          {file ? file.name : 'Choose File'}
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

export default SaleBrochure