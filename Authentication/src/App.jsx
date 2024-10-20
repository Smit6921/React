import { useState } from 'react'
import './App.css';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { Link, Route, Routes } from 'react-router-dom';
import PasswordReser from './PasswordReser';
import { getAuth } from 'firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'
import { app } from './firebase'
import React, { useEffect} from 'react'
import Main1 from './Main1';

const App = () => {

  const auth = getAuth(app);

    const [user , setUser] = useState("");

    useEffect(()=> {
        const stateChanged = () => {
            onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser);
            });
        };
        return()=> stateChanged();
    },[]);

    console.log(user)

  return(
    <>
      {
        user ? (
          <Main1 email={user.email}/>
        ) : (
          <Routes>
            <Route path="/" element={<SignUp/>}></Route>
            <Route path="/SignIn" element={<SignIn/>}></Route>
            <Route path="/PasswordReset" element={<PasswordReser/>}></Route>
          </Routes>   
        )
      }  
    </>
  );
}
export default App
