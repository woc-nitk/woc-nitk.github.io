import React from 'react';

import '../aboutpage/about.css'

const About = ({
    title,
    desc,
    picture
}) => {
  const points = desc && desc.map((point) => 
     <li>{point}</li>
  );

  return (
    <div className='about-card'>
      <h1 className='about-title'>{title}</h1>
      <div className='about-content'>
        <ul className='desc'>{points}</ul>
        
        <img className='picture' src= {process.env.PUBLIC_URL + picture} alt="coding image" />
      </div>
    </div>
  )
}

export default About