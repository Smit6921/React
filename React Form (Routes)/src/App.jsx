// import { useState } from 'react'
// import './App.css';
// import "./App.css";
// import Form from './Form';
import SpradingForm from './SpradingForm';
// import './index.css';
import './App.css';
// import './Form.css';
// import SpradingForm from './SpradingForm';
import UseEffect from './UseEffect';
import Sidebar from './Sidebar';
import Home from './Home';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import About from './About';
import Form from './SpradingForm';
import FormShow from './FormShow';
import DataShow from './DataShow';

const App = () => {
  return(
    <>
      <header>
        <div className = "logo">
          <h1>LOGO</h1>
        </div>
        <nav>
          <ul>
            <li>About</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Feedback</li>
            <li>Login</li>
          </ul>
        </nav>
      </header>
      {/* <SpradingForm/> */}
      <Sidebar/>
      {/* <FormShow/>
      <DataShow/> */}
      {/* <Form/> */}
      {/* <UseEffect/> */}
        
      <Routes>
        {/* <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Form/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/form" element={<Form/>}/> */}
        <Route path="/" element={<FormShow/>}/>
        <Route path="/data" element={<DataShow/>}/>
      </Routes>
    </>
  );
}
export default App
