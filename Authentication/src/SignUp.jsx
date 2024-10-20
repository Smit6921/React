import React, { useState } from 'react'
import {app} from "./firebase"
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { Link } from 'react-router-dom';
import './App.css';

export default function SignUp() {

    const [email , setEmail] = useState();
    const [password , setPassword] = useState();
    
    const auth = getAuth(app);

    const handleSignUp = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password)
        .then(()=>console.log("Successfully SignUp"))
        .catch((err)=>console.log(err))

        e.target.reset();
    }

  return (
    <div>
        <br />
        <br />
        <h2>Sign Up</h2>
        <br /><br />
        <form onSubmit={handleSignUp}>
           Email Address : <input type="email"
            placeholder='Enter Your Email'
            onChange={(e)=>setEmail(e.target.value)}
            />
            <br /><br />
           Paassword : <input type="password"
            placeholder='Enter Your Password'
            onChange={(e)=>setPassword(e.target.value)}
            />
            <br /><br />
            <button>Submit</button>
            <br /><br />
            Already User ? <Link to="/SignIn">Sign-In To Your Account</Link>
        </form>
    </div>
  )
}
