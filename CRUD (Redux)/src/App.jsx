import { useState } from 'react';  
import './App.css';  
import './index.css';  
import { useDispatch, useSelector } from 'react-redux';  
import { AddData, DeleteData, EditData } from './Action'; 

const App = () => {  
  const [input, setInput] = useState({  
    name: "",  
    password: "",  
  });  
  
  const [editIndex, setEditIndex] = useState(null);  
  const dispatch = useDispatch();  
  const data = useSelector((state) => state.item);  

  const handleForm = (e) => {  
    e.preventDefault();  
    if (editIndex !== null) {  
      dispatch(EditData({ item: input, index: editIndex }));  
      setEditIndex(null);  
    } else {  
      dispatch(AddData(input));  
    }    
    setInput({ 
      name: "", 
      password: "" });  
    e.target.reset();  
  };  

  const handleDelete = (index) => {  
    dispatch(DeleteData(index));  
  };  

  const handleEdit = (index) => {  
    setEditIndex(index);  
    const dataToEdit = data[index];  
    setInput(dataToEdit);  
  };  

  return (  
    <>  
      <form onSubmit={handleForm} className="ForForms">  
      <h4>Name :</h4> 
      <br />
        <input type="text" placeholder="Enter Your Name"   
          value={input.name}  
          onChange={(e) => setInput({ ...input, name: e.target.value })}  
          name="name"  
        />   <br /> <br /> <br />
        <h4>Password :</h4> 
        <br />
        <input type="password" placeholder="Enter Your Password"   
          value={input.password}  
          onChange={(e) => setInput({ ...input, password: e.target.value })}  
          name="password"  
        />  
        <br /><br /><br />  
        <button>{editIndex === null ? "Submit" : "Update"}</button>  
      </form>  

      {/* <ul>    
           <li key={index}>  
             Name : {ele.name} & Password : {ele.password}    
             <button onClick={() => handleDelete(index)}>Delete</button> -----    
             ---<button onClick={() => handleEdit(index)}>Edit</button>  
           </li>   */}
        {/* </ul>  */}

          <table border={3} className="ForDataTable">
            <thead>
                <tr>
                  <td>Sr No.</td>
                  <td>Name</td>
                  <td>Password</td>
                  <td>Actions</td>
                </tr>
            </thead>
            
            <tbody>
              {
                data.map((ele,index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{ele.name}</td>
                <td>{ele.password}</td>
                <td>
                <button onClick={() => handleEdit(index)} className="ForEditBTN">Edit</button> 
                <button onClick={() => handleDelete(index)} className="ForDelBTN">Delete</button>
                </td>
              </tr>
              ))
            }
            </tbody>
          </table>
          
    </>  
  );  
};  

export default App;