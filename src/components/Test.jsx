import React from 'react'
import { db } from '../firebase/firebaseConfig'
import { collection, doc, getDocs, getDoc, updateDoc, addDoc } from 'firebase/firestore'

const Test = () => {

const testUploadData = async () => {


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
        isReject: false,
        
    });

  }

  return (
    <div>Test

        <button 
        onClick={()=> testUploadData()} 
        className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded mr-3"> ADD DUMMY DATA</button>
    </div>
  )
}

export default Test