import React, { useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore"; 
import {db} from "../firebase/firebaseConfig"

const TestFetch = () => {
const [data, setData] = useState([]);


useEffect(() => {
    const fetchData = async () => {
        try {
            const testRef = doc(db, "test", "SF");
            const testSnap = await getDoc(testRef);
            if (testSnap.exists()){
                setData([testSnap.data()])
            }else{
                console.log("NO document");
            }
        } catch (error) {
            console.log("ERROR RETRIEVE DATA");
        }
    }
    fetchData();
}, [])


  return (
    <div className='text-3xl'>
        <h1>{data.map((item) => (
            <p key={item.state}>The population {item.population}</p>
        ))}</h1>
    </div>
  )
}

export default TestFetch