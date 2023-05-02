import React, { useState } from 'react'
import { db, storage } from '../firebase/firebaseConfig'
import { collection, doc, getDocs, getDoc, updateDoc,addDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
const Test = () => {

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [url, setUrl] = useState()

  
    const metadata = {
      contentType: 'image/jpeg'
    };

    const uploadImage = () => {
        
        if (selectedFile == null) return;
        const imageRef = ref(storage, `images/${selectedFile.name + "TTEESSTT"}`)
        const uploadTask = uploadBytesResumable(imageRef, selectedFile, metadata);

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
                testUploadData(downloadURL)
              });
        })
    }

  const changeHandler = (e) => {
      setSelectedFile(e.target.files[0])
      setIsFilePicked(true)
  }

  const handleSubmission = () => {
    uploadImage()
  }
  
const testUploadData = async (url) => {


    const current = new Date();
    const dateNow = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const docRef = await addDoc(collection(db,"raac-collection"), {
        type: "AdvertisementJournal",
        title: "A name given to the resource",
        subject: "The topic of the resource",
        source: "Test Source",
        rights: "TEST.co",
        relation: "relation",
        publisher: "ABC",
        language: "En",
        identifier: "Identifier",
        format: "Physical Medium",
        description: "Description!",
        date: dateNow,
        creator: "JT",
        coverage: "coverage",
        contribution: "contribution",
        isApprove: false,

        isPending: true,
        url: url
    });

  }
const testUpload = async() => {

  const docRef = doc(db, 'raac-collection', '5DbBMY5SX1mvGadFKfI3');
  const docRef2 = doc(db, 'raac-collection', 'A2CkN4jnON2VZYWbbTli');
  const docRef3 = doc(db, 'raac-collection', 'TGTdEnjHL6Jt313HrTV2');
  const docRef4 = doc(db, 'raac-collection', 'beT9VgtfEnZYYw0uAZG6');
  const docRef5 = doc(db, 'raac-collection', 'o2cOMUfPOlG2FgCuc5EL');

  await updateDoc(docRef, { isPending: true })
  await updateDoc(docRef2, { isPending: true })
  await updateDoc(docRef3, { isPending: true })
  await updateDoc(docRef4, { isPending: true })
  await updateDoc(docRef5, { isPending: true })
  alert("SUCCESS")

}



  return (
    <div className='bg-gray-400 h-screen'><h1>Test</h1>
        <input type="file" onChange={changeHandler}/>
        <button 
        onClick={()=> handleSubmission()} 
        className="bg-yellow-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded mr-3"> SUBMIT DUMMY DATA</button>

        <button 
        onClick={()=> testUploadData()} 
        className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded mr-3"> ADD DUMMY DATA</button>

        <button 
        onClick={()=> testUpload()} 
        className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded mr-3"> CHANGE</button>
    </div>
  )
}

export default Test