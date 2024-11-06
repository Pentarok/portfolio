
import React, { useEffect, useState } from 'react';
import  {ReactTyped}  from 'react-typed';  // Named import
import profile5 from './assets/profile5.jpg';
import './Intro.css';



const Intro = () => {
  return (
    <div>
      <div className="intro-wrapper">
        <div className="intro-text">
          <h1>
          <ReactTyped
    startWhenVisible
    loop={true}
    strings={[
      "Hello there, am Emmanuel",
     
    ]}
    typeSpeed={80}
    backSpeed={50}
  />
          </h1>
          <p>
            A passionate frontend developer with a strong focus on creating dynamic and user-friendly interfaces. I specialize in React, leveraging its component-based architecture to build responsive and interactive web applications.
          </p>
        </div>
        <div className="intro-image">
          <div className="image-box">
            <img src={profile5} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Intro;

