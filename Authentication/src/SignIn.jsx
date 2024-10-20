import React, { useState } from 'react'
import {app} from "./firebase"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import './App.css';

export default function SignIn() {

    const [email , setEmail] = useState();
    const [password , setPassword] = useState();
    
    const auth = getAuth(app);

    const handleSignUp = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
        .then(()=>console.log("Successfully SignIn"))
        .catch((err)=>console.log(err))
    }

  return (
    <div>
        <br />
        <br />
        <h2>Sign In To Your Account</h2>
        <br /><br />
        <form onSubmit={handleSignUp}>
            Email Address :<input type="email"
            placeholder='Enter Your Email'
            onChange={(e)=>setEmail(e.target.value)}
            />
            <br /><br />
            Password :<input type="password"
            placeholder='Enter Your Password'
            onChange={(e)=>setPassword(e.target.value)}
            />
            <br /><br />
            <button>Submit</button>
            <br /><br />
            Forgot Password ? <Link to="/PasswordReset">Click Here</Link>
            <br /> <br />
            Click Here For The Sing-Up Page <Link to="/">Click Here</Link>
        </form>
    </div>
  )
}
