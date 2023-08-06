import React from 'react'
import "./Destination.css"
import DestinationData from '../components/DestinationData'
import sarajevo1 from "../images/sarajevo1.jpg"
import sarajevo2 from "../images/sarajevo2.jpg"
import mostar1 from "../images/mostar1.jpg"
import mostar2 from "../images/mostar2.jpg"


const Destination = () => {
  return (
    <div className='destination'>
      <h1>Popular Destination</h1>

      <DestinationData
        className="first-des" 
        heading="Sarajevo"
        text="Višestoljetna multikulturalnost dovela je do stvaranje jedinstvene, bogate i očaravajuće sarajevske kulturne mješavine, koja poput moćnog magneta privlači posjetitelje sa svih strana svijeta. Stoga i ne čudi što Sarajevo, glavni i najveći grad Bosne i Hercegovine, s otprilike 275.000 stanovnika, zovu europskim Jeruzalemom. Grad je uistinu velik, no većina atrakcija nalazi se u centru, starom gradu i oko rijeke Miljacke, pa ih možete obići pješke."
        img1={sarajevo1}
        img2={sarajevo2}
      />

<DestinationData 
        className="first-des-reverse" 
        heading="Mostar"
        text="Najveći grad u Hercegovini i peti najveći u BiH, Mostar je jedna od najposjećenijih destinacija ove zemlje, a omiljeno je odredište i brojnim turistima koji u njega dolaze s hrvatske obale. Jedno je sigurno, gotovo svi koji ga posjete iz njega odlaze zaljubljeni u njegovu arhitekturu, opuštenost, nenametljivi šarm i bogatu prošlost kojom se ponosi.Smješten u dolini između brda Hum i u podnožju planine Velež, Mostar je i jedan od najtoplijih gradova u ovom kraju. "
        img1={mostar1}
        img2={mostar2}
      />
      </div>
  )
}

export default Destination
