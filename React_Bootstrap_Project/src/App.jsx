import { useState } from 'react'
import "./App.css"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from './Header';
import SectionOne from './SectionOne';
import Footer from './Footer';
const App = () => {
  return(
    <>
    <Header/>
    <SectionOne/>
    <Footer/>
    </>
  );
}
export default App
