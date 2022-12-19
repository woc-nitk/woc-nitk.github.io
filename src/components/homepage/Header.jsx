import React from 'react'
import coding from '../../assets/coding.gif'
import pointer from '../../assets/pointer.gif'

const Header = () => {
  return (
    <section className='header'>
        <div className="headline">
            <h1>NITK Winter Of Code</h1>
            <h1 className='year'><b>2022</b></h1>
            <h3><b>Kickstart your open source journey...</b></h3>
            <div className="options">
            <button><b>Register Now</b></button>
            <button className='btn2'>Learn more</button>
            </div>
            <img className='pointer' src={pointer} alt="" />
        </div>
        <div className='coding'><img src= {coding} alt="" /></div>
    </section>
  )
}

export default Header
