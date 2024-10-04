import React, { useEffect, useState } from 'react';

import './projects.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const Projects = () => {
const [projects,setProjects]=useState([])
  function fetchProjectsData() {
    fetch('https://raw.githubusercontent.com/Pentarok/projectsApi/main/projects.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Project data:', data);
        setProjects(data);
      })
      .catch(error => {
        console.error('There was a problem fetching the data:', error);
      });
  }
  
  // Call the function to fetch and log the data
  fetchProjectsData();
useEffect(()=>{
  fetchProjectsData();
},[])  
  return (
    <div>
     {  projects && projects.length>0
     ?
     <h4 className='text-center text-white'>PROJECTS</h4>
     :null} 
  
    <div className="mega-container">


    <div className='mega-holder'>

      
{
  projects && projects.length>0?
  projects.map((project,i)=>
    <div className="main" key={i}>


  <div className="text-box-wrapper">
             <span className='overlay'></span>
                   <div className="text-box">
                       <h4 className='text-center'>{project.title}</h4>

                        <p className='summary'>{project.summary}</p>
                  </div>

  </div>
  <div className="redirect-wrapper">
        <div className="button-wrapper">
             <div >
             <Link 
  to={`/project/${project.id}`} 
  state={{ project }}  // passing the project data
  className='button'>
  View More
</Link>

              </div>    
        </div>
     </div>
</div>)
 
  :null
}

    </div>

    </div>
    </div>
  )
}

export default Projects