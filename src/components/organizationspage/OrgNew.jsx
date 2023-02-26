import React from 'react'
import OrgCard from '../cards/OrgNewCard.jsx'
import organizations from '../../assets/organizations.js'
import './org.css'

const Projects = () => {
  return (
    <div>
      <h1>Organizations</h1>
      <div className='org-container'>
         {organizations.links.map((segment) => (
            <OrgCard 
            key = {segment.name}
            name = {segment.name}
            desc = {segment.description}
            />
         ))}
      </div>
    </div>
  )
}

export default Projects
