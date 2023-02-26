import React from 'react'
import './projectsCard.css'

const ProjectCard = ({
    mentors,
    title,
    org,
    summary,
    url,
    contributors,
    openToAll
}) => {

    const students = contributors && contributors.map((student) =>
       <li>{student.name}</li>
    );

    const guides = mentors && mentors.map((student) =>
       <li>{student.name}</li>
    );
  return (
    <div className='project-card'>
      <div className='project-header'>
        <div><h3>Contributors</h3> {students}</div>
        <div><h3>Mentors</h3> {guides}</div>
        <div><h3>Organization</h3>&nbsp;{org}</div>
      </div>
      <h2 className='project-title'>{title}</h2>
      <p>{summary}</p>
      <div className='details'>
        <button className='link'><a href={url} target = "_blank">More Details</a></button>
        <h3 className='domain'>Domain: </h3>
      </div>
    </div>
  )
}

export default ProjectCard
