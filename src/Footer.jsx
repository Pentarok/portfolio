import React from 'react';
import { LinkedIn, WhatsApp } from '@mui/icons-material'; // Material UI icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome icon component
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'; // FontAwesome Twitter icon
import './Footer.css';
const Footer = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'hsl(294, 98%, 30%)', color: '#fff',}}>
      <h3>Find me on:</h3>
      <div className='d-flex justify-content-center align-items-center gap-2'>
        <div className="icon">
        <a href="https://www.linkedin.com/in/emmanuel-makori-a073482b4" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}>
          <LinkedIn />
        </a>
        </div>

        <div className="icon">
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}>
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        </div>
       
        <div className='icon'>
        <a href="https://wa.me/+254742171443" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 10px' }}>
          <WhatsApp />
        </a>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;

