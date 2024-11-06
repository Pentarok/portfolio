import React from 'react';
import Portfolio from './Portfolio.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectDetails from './ProjectDetails.jsx';
import Layout from './Layout.jsx';
import Badges from './Badges.jsx';
import Skills from './Skills.jsx';
import About from './About.jsx';
import Projects from './projects.jsx';
import Contact from './Contact.jsx';
function App() {
  return (
    <div>

    
  
<BrowserRouter>
<Routes>
 

 
  <Route path='' element={<Layout/>}>
       <Route path='/' element={<Portfolio/>}></Route>
  <Route path='/home' element={<Portfolio/>}></Route>
  <Route path='/project/:id' element={<ProjectDetails/>}></Route>
    <Route path='/badges' element={<Badges/>}></Route>
    <Route path='/skills' element={<Skills/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/projects' element={<Projects/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
  </Route>
</Routes>


</BrowserRouter>

    </div>
  
    

  );
}

export default App;
