import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react'
import { getAuth } from 'firebase/auth';
import { app } from './firebase';
import { Link } from 'react-router-dom';
import './App.css';

export default function PasswordReser() {

    const auth = getAuth();

    const [email , setEmail] = useState("");
    sendPasswordResetEmail(auth,email)
    .then(()=>console.log("Link Sended Successfully"))
    .catch((err)=>console.log(err))

   const handlePasswordReset = (e) => {
    e.preventDefault()
    setEmail("")
    e.target.reset()
   }

  return (
    <div>
        <br /> <br />
        <h2>Forgot Your Password</h2>
        <br /><br />
        <form>
           <b>Email Address :</b><input type="email"
            placeholder='Enter Your Email Address'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <br /><br />
            <button onClick={handlePasswordReset}>Submit</button>
            <br /><br />
            <Link to="/SignIn">Sign-In To Your Account</Link>
        </form>
    </div>
  )
}
