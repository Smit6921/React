import React, { useEffect, useState } from 'react'
import "./App.css";

export default function UseEffect() {

    const[count , setCount] = useState(0);

    useEffect(() => {
        console.log("Mounting...")
    },[]);

    useEffect(() => {
        console.log("Update...")
    },[count]);
    
  return (
    <>
        <h1 className="ForH1"> Counter</h1>
        <h2 className="ForH2">Count : {count}</h2>
        <button onClick={() => setCount (count + 1)} className="ForIncBTN">Increment the Count</button> 
        <button onClick={() => setCount (count - 1)} className="ForDecBTN">Decrement the Count</button>
    </>
  )
}
