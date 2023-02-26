import React from 'react'
import Mentee from '../../assets/mentee.png'
import Mentor from '../../assets/mentor.png'
import Org from '../../assets/organization.png'

const Register = () => {
  return (
    <section className='register'>
        <h2>Kickstart your opensource journey</h2>
        <div className='reg'>
        <div className='register-card'>
          <div className='register-info'>
         <img src={Mentee} alt="mentee" />
         <h3>MENTEE</h3>
         <p>If you are new to open source, or a pereson 
          looking to contribute to the live projects, you are 
          in the right place. Come join us!
         </p>
         </div>
         <button><b>Contribute as a mentee</b></button>
        </div>
        <div className='register-card'>
          <div className='register-info'>
         <img src={Mentor} alt="" />
         <h3>MENTOR</h3>
         <p>If you are someone who likes to lift and 
          help others to upskill themselves, then 
          why second thought? Join us right away.
         </p>
         </div>
         <button><b>Come and lead the team</b></button>
        </div>
        <div className='register-card'>
          <div className='register-info'>
         <img src={Org} alt="" />
         <h3>ORGANIZATIONS</h3>
         <p>Do you have problems to solve and looking 
          for the right people to come together? Come join us 
          to meet the bright minds to solve
         </p>
         </div>
         <button><b>Let's solve together</b></button>
        </div>
        </div>
    </section>
  )
}

export default Register
