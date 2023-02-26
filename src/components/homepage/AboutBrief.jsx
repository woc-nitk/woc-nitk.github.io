import React from 'react'

const AboutBrief = () => {
  return (
    <section className='about-brief'>
        <div className='text'>
           <h2>
            What is NITK Winter of Code?
           </h2>
           <p>
            NITK Winter of Code aims at helping students get 
            started with open source projects that directly
            impact people's lives. Winter of Code has a philosophy 
            very similar to larger programs like GSoC and Outreachy.
            The participants will learn how to prepare a project 
            application, work in teams, understand the importance 
            of effective communication, and most importantly, work 
            with large codebases. They will also learn the intricate
             workflows and good coding practices.
           </p>
           <button className='l-more'>Learn more</button>
        </div>
        <div className='numbers'>
         <div className='info'>
           <h1>100+</h1>
           <p>Registrations</p>
         </div>
         <div className='info'>
           <h1>50+</h1>
           <p>Participants</p>
         </div>
         <div className='info'>
           <h1>10+</h1>
           <p>Institutes</p>
         </div>
         <div className='info'>
           <h1>5+</h1>
           <p>Organizations</p>
         </div>
         <div className='info'>
           <h1>20+</h1>
           <p>Mentors</p>
         </div>
         <div className='info'>
           <h1>3</h1>
           <p>Years</p>
         </div>
        </div>
    </section>
  )
}

export default AboutBrief
