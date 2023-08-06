import React from 'react'
import { StyledCard } from './Card.styled'
import travel3 from"../images/travel3.png"



export default function Card({ item: { id, title, body, image } }) {
  return (
    <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>

      <div>
        <img src={travel3} alt='' />
      </div>
    </StyledCard>
  )
}