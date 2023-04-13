import React, { useEffect, useState } from 'react'
import { storage } from '../firebase/firebaseConfig';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
const Upload = () => {

    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const imageListRef = ref(storage, "images/")

    const uploadImage = () => {
        
        if (imageUpload == null) return;
        setIsLoading(true);
        const imageRef = ref(storage, `images/${imageUpload.name + "TTEESSTT"}`)

        uploadBytes(imageRef, imageUpload).then(() => {
            alert("Image Uploaded");
            setIsLoading(false);
        }) 
    }

    useEffect(() => {
        listAll(imageListRef).then((res) => {
            res.items.forEach((item) => {
                setIsLoading(true);
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                    setIsLoading(false);
                })
            })
        })
    },[])


  return (

    <div> 
        {isLoading ? (
        <div className="absolute top-1/2 left-1/2  h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"role="status"> </div>
        ): (<>
        <h1>Upload FILE</h1>
        <input 
            type="file" 
            onChange={(event) => {
                setImageUpload(event.target.files[0]);
            }} 
            />
        <button className='border border-collapse border-gray-950' 
        onClick={uploadImage}>Upload Image</button>

        {imageList.map((url) => {
            return <img className='w-20 h-20' src={url}/>
        })}
        </>)
        }

    </div>
  )
}

export default Upload