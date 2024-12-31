import React, { useState } from 'react';  
import './App.css';  
import { Link } from 'react-router-dom';

const EmployeeTable = () => {  
  const [item, setItem] = useState(() => {  
    const storedData = localStorage.getItem("data");  
    return storedData ? JSON.parse(storedData) : [];  
  });  

  const [editIndex, setEditIndex] = useState(null); 
  const [editInput, setEditInput] = useState({});  

  const deleteData = (index) => {  
    const updatedData = item.filter((_, i) => i !== index);  
    setItem(updatedData);  
    localStorage.setItem("data", JSON.stringify(updatedData));  
  };  

  const initiateEdit = (index) => {  
    setEditIndex(index);  
    setEditInput(item[index]);   
  };  

  const updateData = () => {  
    const updatedData = [...item];  
    updatedData[editIndex] = editInput;  
    setItem(updatedData);  
    localStorage.setItem("data", JSON.stringify(updatedData));  
    setEditIndex(null);   
    setEditInput({}); 
  };  

  const handleEditInputChange = (e) => {  
    const { name, value } = e.target;  
    setEditInput((prev) => ({ ...prev, [name]: value }));   
  };  

  return (  
    <div>  
        <br />
        <br /><br /><br /><br />
      {/* <h2>Employee List</h2>   */}
      <Link to = "/" className='ForBTN2'>Add New Employee</Link> <br /> <br />
      {item.length > 0 ? (  
        <table border={2} className='ForTableEmpl'>  
          <thead>  
            <tr>  
              <td>Sr No</td>  
              <td>Name</td>  
              <td>Email</td>  
              <td>Position</td>  
              <td>Salary</td>  
              <td>Contact Number</td>  
              <td>Actions</td>  
            </tr>  
          </thead>  
          <tbody>  
            {item.map((ele, index) => (  
              <tr key={index}>  
                <td>{index + 1}</td>  
                <td>{index === editIndex ? (  // Conditional rendering of input fields  
                  <input   
                    type="text"   
                    name="name"   
                    value={editInput.name || ''}   
                    onChange={handleEditInputChange}   
                  />  
                ) : ele.name}</td>  
                <td>{index === editIndex ? (  
                  <input   
                    type="email"   
                    name="email"   
                    value={editInput.email || ''}   
                    onChange={handleEditInputChange}   
                  />  
                ) : ele.email}</td>  
                <td>{index === editIndex ? (  
                  <input   
                    type="text"   
                    name="position"   
                    value={editInput.position || ''}   
                    onChange={handleEditInputChange}   
                  />  
                ) : ele.position}</td>  
                <td>{index === editIndex ? (  
                  <input   
                    type="number"   
                    name="salary"   
                    value={editInput.salary || ''}   
                    onChange={handleEditInputChange}   
                  />  
                ) : ele.salary}</td>  
                <td>{index === editIndex ? (  
                  <input   
                    type="text"   
                    name="phone"   
                    value={editInput.phone || ''}   
                    onChange={handleEditInputChange}   
                  />  
                ) : ele.phone}</td>  
                <td>  
                  {index === editIndex ? ( 
                    <button onClick={updateData} className='ForEdiBTn'>Update</button>  
                  ) : (  
                    <>  
                      <button onClick={() => initiateEdit(index)} className='ForEdiBTn'>Edit</button>  
                      <button onClick={() => deleteData(index)} className='ForEdiBTn'>Delete</button>  
                    </>  
                  )}  
                </td>  
              </tr>  
            ))}  
          </tbody>  
        </table>  
      ) : (  
        <p>No employees found.</p>  
      )}  
      {/* <a href="/">Back to Form</a>    */}
    </div>  
  );  
};  

export default EmployeeTable;