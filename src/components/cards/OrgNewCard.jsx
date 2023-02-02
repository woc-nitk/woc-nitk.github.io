import React from 'react'
import "./orgCard.css"

const orgNewCard = ({
    name,
    desc
}) => {
  return (
    <div className='org-card'>
      <h1>{name}</h1>
      <p>{desc}</p>
    </div>
  )
}

export default orgNewCard
