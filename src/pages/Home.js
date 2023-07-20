import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
      <h1>Go to dashboard</h1>
      <Link to="/dashboard"> 
          <button>Dashboard</button>
      </Link>
    </div>
  )
} 

export default Home
