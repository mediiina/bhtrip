import React from 'react'
import {Link} from "react-router-dom"
import Navbar from '../Navbar'
import Header from './Header'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <h1>Go to dashboard</h1>
      <Link to="/dashboard"> 
          <button>Dashboard</button>
      </Link>
    </div>
  )
} 

export default Home
