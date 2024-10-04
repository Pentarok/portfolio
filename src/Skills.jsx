import React from 'react'
import './skills.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const Skills = () => {
 
    const skills=[
"HTML5","cascading style sheet (Css)","Javascript","React.js","Bootstrap"
    ]

    
  return (
    <div className='skills'>
<div>
    <h4 className='text-center'>SKILLS</h4>
        <ul>
           {skills.map((skill,i)=><li key={i}>

             {skill}   
                      


           </li>)}

        </ul>
    </div>
    </div>
  )
}

export default Skills