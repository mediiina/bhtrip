import React from 'react'
import "./Header.css"
import cover from "../images/Travel2.png"



export default function Header() {
    return (
      <div className="header">
          <div className="headerTitles">
              <span className="headerTitleSm"></span>
              <span className="headerTitleLg">Upoznajmo zajedno Bosnu i Hercegovinu</span>  
          </div>
          <img className="headerImg" src={cover} alt="Travel"></img>
           
         
      </div>
    )
    } 
  
