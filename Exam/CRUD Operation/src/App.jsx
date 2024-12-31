// import { useState } from 'react'  
import SpradingForm from './SpradingForm';  
import EmployeeTable from './EmployeeTable'; // Added import for EmployeeTable  
import './App.css';  
import { Routes, Route } from 'react-router-dom';  

const App = () => {  
  return (  
    <>  
      <header>  
        <div className="logo">  
          <h1>Employee Management App</h1>  
        </div>  
      </header>  
      <Routes>  
        <Route path="/" element={<SpradingForm />} />  
        <Route path="/employees" element={<EmployeeTable />} />  
      </Routes>  
    </>  
  );  
};  

export default App;