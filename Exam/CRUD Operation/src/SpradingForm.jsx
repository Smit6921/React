import { useEffect, useState } from "react";  
import { useNavigate } from "react-router-dom";  
import './App.css';  

export default function SpradingForm() {  
  const [input, setInput] = useState({  
    name: "",  
    email: "",   
    position: "",   
    salary: "",  
    phone: "",  
  });  

  const [item, setItem] = useState(() => {  
    const storedData = localStorage.getItem("data");  
    return storedData ? JSON.parse(storedData) : [];  
  });  

  const navigate = useNavigate();  

  const handleForm = (e) => {  
    e.preventDefault();  
   
    if (!input.name || !input.email || !input.phone || !input.position || !input.salary) {  
      alert("Please fill in all fields.");  
      return;  
    }   

    setItem([...item, input]);  
    setInput({  
      name: "",  
      email: "",   
      position: "",   
      salary: "",  
      phone: "",  
    });  
    navigate('/employees');   
  };  

  useEffect(() => {  
    localStorage.setItem("data", JSON.stringify(item));  
  }, [item]);  

  // const deleteData = (index) => {  
  //   const updatedData = item.filter((_, i) => i !== index);  
  //   setItem(updatedData);  
  //   localStorage.setItem("data", JSON.stringify(updatedData));  
  // };  

  // const [edit, setEdit] = useState(null);  

  // const editData = (index) => {  
  //   setEdit(index);  
  //   setInput(item[index]);  
  // };  

  // const handleUpdate = (e) => {  
  //   e.preventDefault();  
  //   const updatedData = [...item];  
  //   updatedData[edit] = input;  
  //   setItem(updatedData);  
  //   setInput({  
  //     name: "",  
  //     email: "",   
  //     position: "",   
  //     salary: "",  
  //     phone: "",   
  //   });  
  //   setEdit(null);  
  // };  
  
  return (  
    <div className="ForForms">  
      <br />  
      <h2 className="ForHeading">Fill The Employee Form</h2>  
      <br />   
      <hr /><br /><br />  
      <form>  
        <div className="ForDisFlex">  
          <h4 className="ForNames">Enter Your Full Name:</h4>  
          <input  
            type="text"  
            value={input.name}  
            placeholder="Enter Your Name"  
            onChange={(e) => setInput({ ...input, name: e.target.value })}  
          />  
        </div>  
        <br />  
        <div className="ForDisFlex">  
          <h4 className="ForNames">Enter Your Email Address:</h4>  
          <input  
            type="email"  
            value={input.email}  
            placeholder="Enter Your Email"  
            onChange={(e) => setInput({ ...input, email: e.target.value })}  
          />  
        </div>   
        <br />  
        <div className="ForDisFlex">  
          <h4 className="ForNames">Enter Your Position:</h4>  
          <input  
            type="text"  
            value={input.position}  
            placeholder="Enter Your Position"  
            onChange={(e) => setInput({ ...input, position: e.target.value })}  
          />  
        </div>   
        <br />  
        <div className="ForDisFlex">  
          <h4 className="ForNames">Enter Your Salary:</h4>  
          <input  
            type="number"  
            value={input.salary}  
            placeholder="Enter Your Salary"  
            onChange={(e) => setInput({ ...input, salary: e.target.value })}  
          />  
        </div>  
        <br />  
        <div className="ForDisFlex">  
          <h4 className="ForNames">Enter Your Phone Number:</h4>  
          <input  
            type="number"  
            value={input.phone}  
            placeholder="Enter Your Phone Number"  
            onChange={(e) => setInput({ ...input, phone: e.target.value })}  
          />  
        </div>  
        <br />     
        <button onClick={handleForm} className="ForBTN">Submit</button>  
      </form>  
      {/* {item.length > 0 && (  
        <table border={2}>  
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
                <td>{ele.name}</td>  
                <td>{ele.email}</td>  
                <td>{ele.position}</td>  
                <td>{ele.salary}</td>  
                <td>{ele.phone}</td>  
                <td>  
                  <button onClick={() => deleteData(index)} className="ForDelBTN">Delete</button>  
                  <button onClick={() => editData(index)} className="ForEditBTN">Edit</button>   
                </td>  
              </tr>  
            ))}  
          </tbody>  
        </table>  
      )}   */}
    </div>  
  );  
}