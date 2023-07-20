import React from 'react'
import userLogOut from '../auth/userLogOut'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();
  const {error, logOut} = userLogOut();

  const handleLogOut = async () => {
    await logOut();

    if (!error) {
      navigate("/");

    }

  }
  return (
    <div>
      <h1> Welcome to dashboard </h1>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  )
} 

export default Dashboard
