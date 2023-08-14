import React from 'react';
import HeaderResult  from './components/ResultsCom/headerResult';
import OurjeeResults from './components/ResultsCom/OurjeeResults';
import OurNeetResult from './components/ResultsCom/ourNeetResult';
import ChartsOfJee from './components/ResultsCom/chartsOfJee';
import ChartsOfNeet from './components/ResultsCom/ChartsOfNeet';
import Navbar from './components/usedByAll/Navbar';
import Footer from './components/usedByAll/Footer';
import './Results.css';


const Results = () => {
  return (
    <div>
      <Navbar/>
      <div className='background_color'>
            <HeaderResult/>
      </div>
            <OurjeeResults/>
             <ChartsOfJee/>
            <OurNeetResult/>
              <ChartsOfNeet/>
              <Footer/>
    </div>
  )
}

export default Results
