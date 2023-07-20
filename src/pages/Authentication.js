import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "../components/Login";
import SignUp from '../components/Signup';

const Authentication = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
  <div> 
    {toggle ? (
      <Login toggleForm = {handleToggle} /> ) : ( 
      <SignUp toggleForm={handleToggle}/>

      )}
  </div>
  )
  
}

export default Authentication
