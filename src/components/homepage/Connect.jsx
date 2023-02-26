import React from 'react'
import ConnectPic from '../../assets/connectpage.jpg'

const Connect = () => {
  return (
    <section className='connect'>
        <h2>Connect with Us</h2>
        <div className='contact'>
          <div className='handles'>
           <h3>MAIN OFFICE</h3>
           <p>NITK Surathkal,</p>
           <p>Karnataka,</p>
           <p>India</p>
          </div>
          <div className='handles'>
           <h3>SOCIAL MEDIA</h3>
           <p><a href="">LinkedIn</a></p>
           <p><a href="">Twitter</a></p>
           <p><a href="">Instagram</a></p>
          </div>
        </div>
        <h3><b>Email: nitk.woc@nitk.edu.in</b></h3>
        <img src= {ConnectPic} alt="" />
    </section>
  )
}

export default Connect
