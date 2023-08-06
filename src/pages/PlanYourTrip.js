import React from 'react'
import "./PlanYourTrip.css"
import bosnia from "../images/bosnia.png"
import data from "../components/Information"
import Card from "../components/Card"




const PlanYourTrip = () => {

  return (
    <div className="container">
      <div className="left-side">
        <div className="image-container">
          <img src={bosnia} alt="Bosnia" className="rotate-img"/>
        </div>
      </div>
      <div className="right-side">
      <h1>Book your trip to BiH</h1>
          <h2>WELL CONNECTED DESTINATIONS</h2>
          <span className="text">
          The wealth of cultural and historical heritage, natural beauty and attractive places including our mountains, lakes, beautiful villages, our small towns with great soul, will determine the direction of our business policy and the need for our participation in the presentation of our beautiful country.
          </span>
          <div>
           
            {data.map((item, index) => (
              <Card key = {index} item={item} />
            ))}
           
          </div>
        </div>
      </div>
  )
}

export default PlanYourTrip


