import React from 'react'
import "./Header.css"
import cover from "../images/Travel1.png"
import { Link } from 'react-router-dom'



export default function Header() {
    return (
      <div className="header">
          <div className="headerTitles">
              <span className="headerTitleSm"></span>
              <span className="headerTitleLg">Upoznajmo zajedno Bosnu i Hercegovinu</span>  
          </div>
          <img className="headerImg" src={cover} alt="Travel"></img>
           
          <Link to="/dashboard"> <button className='header-btn'>Travel Plan</button> </Link>
         
      </div>
    )
    } 
  
