import React from 'react';
import badge from './assets/badge.jpeg';
import './badges.css';
const Badges = () => {
  return (

    <div className='badge-wrapper'>
        <h4 className='text-white text-center'>BADGE</h4>
    <div className='badge-container'>

         <div>
            <img src={badge} alt="Aws cloud practioner badge" />
<div>
<a href="https://www.credly.com/badges/c41683d7-0b7f-4a02-96a4-95816fe8b03b/linked_in_profile" target="_blank" rel="noopener noreferrer">View my verified achievement</a>
</div>

         </div>
         
    </div>
    </div>
  )
}

export default Badges