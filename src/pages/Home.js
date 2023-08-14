import React from 'react'
import Slider from './components/HomeCom/Slider';
import AboutRaviSir from './components/HomeCom/AboutRavisir';
import CheckoutOurPopularCourses from './components/HomeCom/CheckoutOurPopularCourses';
import WhyUs from './components/HomeCom/WhyUs';
import Ready_to_join from './components/HomeCom/Ready_to_join';
import StudentReviews from './components/HomeCom/StudentReviews';
import Typing_Animation from './components/HomeCom/typing_Animation';
import Navbar from './components/usedByAll/Navbar';
import Footer from './components/usedByAll/Footer';

import './home.css'

const Home = () => {

  // this is the code for rotating the img


  return (
    <div>
      <Navbar/>
     <Slider/>
    <Typing_Animation/>
     <AboutRaviSir/>
     <WhyUs/>

     <CheckoutOurPopularCourses/>
     <Ready_to_join/>
     <StudentReviews/>
     <Footer/>
    </div>
  )
}

export default Home
