import React, { useState } from 'react'
import {app} from "./firebase"
import {  getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Link } from 'react-router-dom';
import './App.css';

export default function SignIn() {
    
    const auth = getAuth(app);

    const provider = new GoogleAuthProvider();

    const handleSignUp = async () => {
        // e.preventDefault();
        await signInWithPopup(auth , provider)
        .then(()=>console.log("Successfully SignIn Using Google Account"))
        .catch((err)=>console.log(err))
    }

  return (
    <div>
        <br />
        <br />
        <h2>Sign In To Your Account</h2>
        <br /><br />
        <button onClick={handleSignUp}>Sign-In With Google</button>
        <br /><br />
        Forgot Password ? <Link to="/PasswordReset">Click Here</Link>
        <br /> <br />
    </div>
  )
}
