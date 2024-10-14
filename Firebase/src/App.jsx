import { useState } from 'react'
import './App.css';
import { app } from './firebase';
import { getDatabase, ref, remove, set, update } from 'firebase/database';
import UserFirebase from './UserFirebase';

const App = () => {

  const db = getDatabase(app);

  const addData = () => {
    set(ref (db,"User/Students"), {
      name : "Student1",
      age : 25,
      std : 10
    });
  };

  const deleteData = () => {
      remove(ref (db, "User/Students"))
      .then(()=>console.log("Deleted"))
      .catch((err)=>console.log("Error :" + err))
  };

  const updateData = () => {
    update(ref(db,"User/Students"),{
      name : "Student2",
      age : 25,
      std : 10
    })
    .then(()=>console.log("Updated"))
    .catch((err)=>console.log("Error:" + err));
  };

  return(
    <>
      <button onClick={addData}>Add Data</button> <br /> <br />
      <button onClick={deleteData}>Delete Data</button><br /> <br />
      <button onClick={updateData}>Update Data</button>
      <br /><br /><br /><br />
      <hr /><br /><hr />
      <UserFirebase/>
    </>
  );
}
export default App
