import { useState } from 'react';  
import './App.css';  
// import './index.css'; 
import Photos from './Photos';
import Dog from './Dog';

const App = () => {
  return(
    <>
        <Dog/>
        <Photos/>
    </>
  );
}
export default App