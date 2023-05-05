import React, { useState } from 'react'
import { db, storage } from '../../firebase/firebaseConfig'
import { collection, doc, getDocs, getDoc, updateDoc,addDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
const AdvertisementNewspaper = () => {
    
   const [format, setFormat] = useState()
   const [contribution, setContribution] = useState()
   const [subject, setSubject] = useState()
   const [right, setRight] = useState()
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
        format: format,
        description: description,
        date: dateNow,
        right: right,
        subject: subject,
        contribution: contribution,
        isApprove: false,
        isPending: true,
        url: url
    });
    }


   const handleFormat = (e)=>{
    setFormat(e.target.value)
   }

   const handleContribution = (e)=>{
    setContribution(e.target.value)
   }

   const handleSubject = (e)=>{
    setSubject(e.target.value)
   }

   const handleRight = (e) => {
    setRight(e.target.value)
   }

   const handleDescription = (e) => {
    setDescription(e.target.value)
   }

   const handleFileChange = (e) => {
    setFile(e.target.files[0])
   }

   const handleSubmit = (e) => {
    e.preventDefault()
    uploadImage()
    console.log(format);
    console.log(contribution);
    console.log(subject);
    console.log(right);
    console.log(description);
    console.log(file);
   }

  return (
    <div >
      <div className="bg-white rounded-lg p-8">
      <div className="w-full max-w-md mx-auto">
        <h2 className="text-xl text-rv100  font-bold mb-4">Enter Description of Files</h2>
        <form >
        <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block text-rv100 font-bold  mb-1 md:mb-0 pr-4" >
        Format
        </label>
          <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="Format"
              id="Format"
              onChange={handleFormat}
            />
    </div>
    <div className="w-full md:w-1/2 px-3">

        <label className="block text-rv100  font-bold  mb-1 md:mb-0 pr-4" >
          Contribution
        </label>
      <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="Contribution"
              onChange={handleContribution}
            />
      </div>
    </div>

    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block text-rv100 font-bold  mb-1 md:mb-0 pr-4" >
        Subject
        </label>
          <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="Subject"
              id="Subject"
              onChange={handleSubject}
            />
    </div>
    <div className="w-full md:w-1/2 px-3">

        <label className="block text-rv100  font-bold  mb-1 md:mb-0 pr-4" >
          Rights
        </label>
      <input
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="Rights"
              id="Rights"
              onChange={handleRight}
            />
      </div>
    </div>

    <div className="w-full">
    <label className="block text-rv100  font-bold  mb-1 md:mb-0 pr-4" >
          Description
        </label>
      <textarea
              className="border border-gray-400 p-2 w-full"
              type="text"
              name="Description"
              id="Description"
              onChange={handleDescription}
            />
    </div>

    <div className="w-full">
      <input
              className="border border-gray-400 p-2 w-full"
              type="file"
              name="Rights"
              id="Rights"
              onChange={handleFileChange}
            />
    </div>

    <div >
            <button
              type="submit"
              onClick={(e)=> handleSubmit(e)}
            >
              Submit
            </button>

            <button
              type="submit"
              onClick={()=> UploadData("FFF")}
            >
              Submit21
            </button>
            <button
              type="button"
            >
              Cancel
            </button>
          </div>

        </form>
    </div>
    </div>
    </div>
  )
}

export default AdvertisementNewspaper