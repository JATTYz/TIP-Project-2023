import React, { useState } from 'react'


const Test = () => {

  const [num, setNum] = useState(0);
  const testNum = () => {
        setNum(num + 1);
  }

  return (
    <div className='text-3xl'>
        <button onClick={testNum}>Test</button>
        <h1>{num}</h1>
    </div>
  )
}

export default Test