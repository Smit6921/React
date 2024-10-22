import React, { useEffect, useState } from 'react'
import { getAuth, signOut } from 'firebase/auth'
// import { onAuthStateChanged } from 'firebase/auth'
import { app } from './firebase'
import './App.css';

export default function Main1({email,displayName}) {

    const auth = getAuth(app);

    const handleSignOut = () =>{
        signOut(auth)
        .then(()=>console.log("User Signed Out Successfully"))
        .catch((err)=>console.log(err))
    }

  return (
    <div>
        <br /><br />
        <h2 style={{ color: 'blue' }}>Hello, {displayName} !!!</h2>
        <br />
        <h2 style={{ color: 'red' }}>Your Register Email : {email}</h2>
        <br /> <br />
        <button onClick={handleSignOut}>SignOut</button>
    </div>
  )
}
