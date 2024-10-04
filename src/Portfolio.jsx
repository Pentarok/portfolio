import React from 'react'
import './portfolio.css'
import Intro from './Intro'
import Projects from './projects'
import Skills from './Skills'
import Badges from './Badges'
import ResponsiveAppBar from './Navbar'
import Footer from './Footer'
import Contact from './Contact'
import About from './About';
const Portfolio = () => {
  return (
    <div>


         <Intro/>
         <About/>
         <Projects/>

         <Skills/>

         <Badges/>
         <Contact/>
        
         <Footer/>
    
    </div>
  )
}

export default Portfolio