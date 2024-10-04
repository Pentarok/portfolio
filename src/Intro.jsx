import React from 'react'
import profile5 from './assets/profile5.jpg';
 import './Intro.css';
const Intro = () => {
  return (
    <div>
        <div className="intro-wrapper">
            <div className="intro-text">
                    <h1>Hello am Manu,</h1>
                    <p>

A passionate frontend developer with a 
strong focus on creating dynamic and 
user-friendly interfaces. I specialize 
in React, leveraging its component-based 
architecture to build responsive and 
interactive web applications.  </p>
            </div>
            <div className="intro-image">
                <div className="image-box">
                    <div>
                    <img src={profile5} alt="" />
                    </div>
                
                </div>

                    </div>
        </div>
    </div>
  )
}

export default Intro