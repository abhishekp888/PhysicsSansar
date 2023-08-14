import React from 'react';
import Header from './components/Aboutuscom/header';
import MISSION from './components/Aboutuscom/MISSION';
import OurJourney from './components/Aboutuscom/OurJourney';
import JoinUs from './components/Aboutuscom/organization';
import KnowYourFaculty from './components/Aboutuscom/KnowYourFaculty.jsx';
import Navbar from './components/usedByAll/Navbar';
import Footer from './components/usedByAll/Footer';

import './About.css'


const AboutUs = () => {
  return (
    <div>
      <Navbar/>
<Header/>
<KnowYourFaculty/>
<MISSION/>
<OurJourney/>

<JoinUs/>
<Footer/>
    </div>
  )
}

export default AboutUs
