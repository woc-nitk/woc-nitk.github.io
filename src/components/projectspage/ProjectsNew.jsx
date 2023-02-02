import React from 'react'
import ProjectCard from '../cards/ProjectNewCard.jsx'
import projects from '../../assets/projects.js'
import './projects.css'

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className='projects-container'>
         {projects.links.map((segment) => (
            <ProjectCard 
            key = {segment.title}
            mentors = {segment.mentors}
            title = {segment.title}
            org = {segment.org}
            summary = {segment.summary}
            url = {segment.url}
            contributors = {segment.students}
            openToAll = {segment.openToAll}
            />
         ))}
      </div>
    </div>
  )
}

export default Projects
