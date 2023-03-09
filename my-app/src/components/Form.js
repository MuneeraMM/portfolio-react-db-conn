import "./FormStyles.css";
import React, { useState } from 'react';
import Axios from 'axios';
const Form = () => {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');

  const submitForm = () => {
    Axios.post("http://localhost:3001/api/insert",{
      name:name,
      email:email,
      message:message
      }).then(() => {
        alert("successful insert");
      });
  };
    
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text" name="name" onChange={(e)=> {
              setName(e.target.value)
            }}></input>
            <label>Your Email</label>
            <input type="email" name="email" onChange={(e)=> {
              setEmail(e.target.value)
            }}></input>
            <label>Your message</label>
            <textarea rows="6" name="message" placeholder="Type your message here" onChange={(e)=> {
              setMessage(e.target.value)
            }} />
            <button className="btn" type="submit" onClick={submitForm}>Submit</button>
        </form>
    </div>
  )
}

export default Form

