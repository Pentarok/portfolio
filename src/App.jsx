import Accordian from './Accordian';
import Try from './Try.jsx'
import Color from './Color.jsx';
/* import Star from './Star.jsx';
import More from './more.jsx';
import './App.css';
import Slider from './Slider.jsx';
import Nav from './Nav.jsx';

import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
/* import Qrcode from './Qrcode.jsx'; 
import Theme from './Theme.jsx';
import Tabtest from './Tab-test.jsx';
import Scroll from './Scroll.jsx';
import Cod from './cod.jsx';
import Pop from './pop.jsx';
import Acodian from './Acodian.jsx'; */
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
     
 {/* <Scroll/> */}

    <div /* style={{display:'flex',
      width:'100%',
      minHeight:'100vh',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      gap:'30px',
      padding:'5px 20px 5px 20px'
    }} */>
  
  {/*}
    <div>
    <Star/> 
    </div>
 <div>
 <Accordian/> 
 </div>
 <div>
 <Color/> 
 </div>
       <div>
       <Tabtest/>
       </div> */}
{/* {       <Slider   />   } */}


    {/*  <TreeView menus={menus} />  */}  
    
{/* <Qrcode/>   */}
  
<BrowserRouter>
<Routes>
 


  <Route path='' element={<Layout/>}>
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
  
    
    </div>
  );
}

export default App;