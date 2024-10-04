import React from 'react'
import { useState,useEffect } from 'react';
const Scroll = () => {
    const [sharedState, setSharedState] = useState(0);

   
    useEffect(() => {
      const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const howMuchScrolled = document.documentElement.scrollTop || document.body.scrollTop;
  
        let height = scrollHeight - clientHeight;
        const percentageScroll = (howMuchScrolled / height) * 100;
  
        console.log(percentageScroll)
        setSharedState(percentageScroll);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
  return (
    <div className="scrollbar-container">
    <div className="scrollbar-progress" style={{ width: `${sharedState}%` }}></div>
  </div>
  )
}

export default Scroll