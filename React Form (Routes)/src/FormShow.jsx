// import React, { useState } from 'react'
// import './App.css';
// import { useNavigate } from 'react-router-dom';

// export default function FormShow() {
    
//     const[input , setInput] = useState({
//         name : "",
//         father : "",
//         mother : "",
//         email : "",
//         phone: "",
//         password: "",
//         gender : "",
//         date : ""
//     });

//     const [item,setItem] = useState(()=>{
//         const storedValue = localStorage.getItem("FormData");
//         return storedValue ? JSON.parse(storedValue) : [];
//     });

//     const [edit,setEdit] = useState(null);
//     const navigate = useNavigate();
    
//     const editData = (index) => {
//         setEdit(index);
//         setInput(item[index]);
//         navigate("/");
//     };

//     const deleteData = (index) => {  
//         const updatedData = item.filter((_, i) => i !== index);  
//         setItem(updatedData);  
//         localStorage.setItem("FormData", JSON.stringify(updatedData)); 
//         navigate("/data", { state: { data: updatedData } }); 
//     };

//     const handleForm = (e) => {
//         e.preventDefault();
//         if(edit !== null) {
//             const updatedItems = [...item];
//             updatedItems[edit] = input;
//             setItem(updatedItems);
//             localStorage.setItem("FormData",JSON.stringify(updatedItems));
//             setEdit(null);
//         }
//         else{
//             const updatedItem = [...item , input];
//             setItem(updatedItem);
//             localStorage.setItem("FormData",JSON.stringify(updatedItem)); 
//         }
        
//         console.log(`Name: ${input.name}`);
//         console.log(`Father's Name: ${input.father}`);
//         console.log(`Mother's Name: ${input.mother}`);
//         console.log(`Email: ${input.email}`);
//         console.log(`Phone Number: ${input.phone}`);
//         console.log(`Password: ${input.password}`);
//         console.log(`Gender: ${input.gender}`);
//         console.log(`Birth-Date: ${input.date}`);
//         setInput({
//             name : "",
//             father : "",
//             mother : "",
//             email : "",
//             phone : "",
//             password : "",
//             gender : "",
//             date : ""
//         });

//         navigate("/data",{state:{data:[...item]}});
//     };

//     const handleUpdate = () => {
//         const updateData = [...item];
//         updateData[edit] = input;
//         setItem(updateData);
//         setInput({
//             name : "",
//             father : "",
//             mother : "",
//             email : "",
//             phone : "",
//             password : "",
//             gender : "",
//             date : ""
//         });
//         setEdit(null);
//       };

//   return (
//     <div className="ForForms">
//       <br /> <br />
//       <h2 className="ForHeading">Fill The Form</h2>
//       <br />
//       <hr />
//       <br /><br />
//        <form action="">
//         <div className="ForDisFlex">
//             <div>
//                 <h4>Enter Your Name :</h4>
//             </div>
//             <div>
//                 <input type="text" placeholder="Enter Your Name" value={input.name} onChange={(e)=>setInput({...input,name:e.target.value})}/>
//             </div>
//             <div className="ForSpace">
//                 <h4>Enter Your Father's Name :</h4>
//             </div>
//             <div>
//                 <input type="text" placeholder="Enter Your Father's Name" value={input.father} onChange={(e)=>setInput({...input,father:e.target.value})}/>
//             </div>
//         </div>
//          <br /><br />
//         <div className="ForDisFlex">
//             <div>
//                 <h4>Enter Your Mother's Name :</h4>
//             </div>
//             <div>
//                 <input type="text" placeholder="Enter Your Mother's Name" value={input.mother} onChange={(e)=>setInput({...input,mother:e.target.value})}/>
//             </div>
//             <div className="ForSpace">
//                 <h4>Enter Your Email Address :</h4>
//             </div>
//             <div>
//                 <input type="email" placeholder="Enter Your Mail" value={input.email} onChange={(e)=>setInput({...input,email:e.target.value})}/>
//             </div>
//         </div> 
//         <br /><br />
//         <div className="ForDisFlex">
//             <div>
//                 <h4>Enter Your Phone Number :</h4>
//             </div>
//             <div>
//                 <input type="number" placeholder="Enter Your Phone Number" value={input.phone} onChange={(e)=>setInput({...input,phone:e.target.value})}/>
//             </div>
//             <div className="ForSpace">
//                 <h4>Enter Your Password :</h4>
//             </div>
//             <div>
//                 <input type="password" placeholder="Enter Your Password" value={input.password} onChange={(e)=>setInput({...input,password:e.target.value})}/>
//             </div>
//         </div>
//         <br />
//         <br />

//         <div className="ForDisFlex">
//             <div>
//                 <h4>Select Your Gender :</h4>
//             </div>
//         <div>
//             <input
//             type="radio"
//             name="gender"
//             id="male"
//             value="Male"
//             onChange={(e) => setInput({ ...input, gender: e.target.value })}
//             />
//             <label htmlFor="male">Male</label>

//             <input
//             type="radio"
//             name="gender"
//             id="female"
//             value="Female"
//             onChange={(e) => setInput({ ...input, gender: e.target.value })}
//             />
//             <label htmlFor="female">Female</label>

//             <input
//             type="radio"
//             name="gender"
//             id="other"
//             value="Other"
//             onChange={(e) => setInput({ ...input, gender: e.target.value })}
//             />
//             <label htmlFor="other">Other</label>
        
//         </div>
//             <div className="ForSpace">
//                 <h4>Enter Your Birth Date :</h4>
//             </div>
//             <div>
//                 <input type="date" name="" id="" value={input.date} onChange={(e)=>setInput({...input,date:e.target.value})}/>
//             </div>
//         </div>

//         {
//             edit === null ? <button onClick={handleForm} className="ForBTN">Submit</button> : 
//             <button onClick={handleUpdate} className="ForBTN">Update</button>
//         }
//       </form>
//     </div>
//   )
// }





import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./App.css";

export default function FormShow() {
  const navigate = useNavigate();
  const location = useLocation();

  const [input, setInput] = useState({
    name: "",
    father: "",
    mother: "",
    email: "",
    phone: "",
    password: "",
    gender: "",
    date: ""
  });

  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const state = location.state;
    if (state && state.isEdit) {
      setEditIndex(state.index);
      setInput(state.item);
    }
  }, [location.state]);

  const handleForm = (e) => {
    e.preventDefault();
    let storedData = JSON.parse(localStorage.getItem("FormData")) || [];

    if (editIndex !== null) {
      storedData[editIndex] = input;
      localStorage.setItem("FormData", JSON.stringify(storedData));
      setEditIndex(null);
    } else {
      storedData.push(input);
      localStorage.setItem("FormData", JSON.stringify(storedData));
    }

    setInput({
      name: "",
      father: "",
      mother: "",
      email: "",
      phone: "",
      password: "",
      gender: "",
      date: ""
    });

    navigate("/data");
  };

  return (
    <div className="ForForms">
      <h2 className="ForHeading">
        {editIndex !== null ? "Edit the Form" : "Fill The Form"}
      </h2>
      <br />
      <hr />
      <br />
      <form onSubmit={handleForm}>
        <div className="ForDisFlex">
          {/* Name, Father Name, Mother Name, Email & Phone Input Fields */}
          {/* Repeat similar structure for input fields */}
          {["name", "father", "mother", "email", "phone"].map((field) => (
            <div key={field}>
              <label>{`Enter Your ${
                field.charAt(0).toUpperCase() + field.slice(1)
              }:`}</label>
              <input
                type={field === "email" ? "email" : "text"}
                placeholder={`Enter Your ${
                  field.charAt(0).toUpperCase() + field.slice(1)
                }`}
                value={input[field]}
                onChange={(e) =>
                  setInput({ ...input, [field]: e.target.value })
                }
              />
            </div>
          ))}

          <div>
            <label>Enter Your Password:</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </div>

          <h4>Select Your Gender:</h4>
          {["Male", "Female", "Other"].map((gender) => (
            <div key={gender}>
              <input
                type="radio"
                name="gender"
                id={gender.toLowerCase()}
                value={gender}
                checked={input.gender === gender}
                onChange={(e) => setInput({ ...input, gender: e.target.value })}
              />
              <label htmlFor={gender.toLowerCase()}>{gender}</label>
            </div>
          ))}

          <div>
            <h4>Enter Your Birth Date:</h4>
            <input
              type="date"
              value={input.date}
              onChange={(e) => setInput({ ...input, date: e.target.value })}
            />
          </div>
        </div>

        <button type="submit" className="ForBTN">
          {editIndex !== null ? "Update" : "Submit"}
        </button>
      </form>
    </div>
  );
}
