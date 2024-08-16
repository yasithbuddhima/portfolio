import React from 'react';
import './App.css';
import 'bootstrap';


import AnchorLink from "react-anchor-link-smooth-scroll";

import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import DataObjectIcon from '@mui/icons-material/DataObject';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';


function App() {
  
  return (
    <div >
    <div>
      <nav>
      <AnchorLink href="#hero">Yasith Buddhima</AnchorLink>
       <ul class="list">
         <li><AnchorLink href="#about"><PermIdentityIcon/></AnchorLink></li>
         <li><AnchorLink href="#projects"><DataObjectIcon/></AnchorLink></li>
         <li><AnchorLink href="#contact"><ForwardToInboxIcon/></AnchorLink></li>
       </ul>
       
      </nav>
      </div>
      
  <Hero/>
  <About/>
  <Projects/>
  <Contact/>
  
  </div>
  
  );
}

export default App;
