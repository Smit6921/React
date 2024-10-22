import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react'
import { getAuth } from 'firebase/auth';
import { app } from './firebase';
import { Link } from 'react-router-dom';
import './App.css';

export default function PasswordReser() {

    const auth = getAuth();

    const [email , setEmail] = useState("");

    const [message , setMessage] = useState("");

   const handlePasswordReset = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth , email)
    .then(()=>{
      console.log("Send It.....");
      setMessage("Open Email To Get Reset Link.....")
    })
    .catch((err)=>console.log(err));
    setEmail("")
    // e.target.reset();
   }

  return (
    <div>
        <br /> <br />
        <h2>Forgot Your Password</h2>
        <br /><br />
        {
          message && <p style={{ color: 'red' }}>{message}</p>
        }
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
            Back To Login ? <Link to="/">Click Here</Link>
        </form>
    </div>
  )
}
