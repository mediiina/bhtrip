import React from 'react'
import {Link} from "react-router-dom"
import Navbar from '../Navbar'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Go to dashboard</h1>
      <Link to="/dashboard"> 
          <button>Dashboard</button>
      </Link>
    </div>
  )
} 

export default Home
