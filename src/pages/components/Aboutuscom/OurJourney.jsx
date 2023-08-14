import React from 'react'
import './OurJourney.css';
import AOS from 'aos';
import { useEffect } from 'react';


const OurJourney = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className='main_OurJurney'>
<div className='BEGINNINGS' data-aos="zoom-in-right">
    <p className='first_BEGINNINGS'>
    FROM HUMBLE BEGINNINGS
    </p>

    <p className='Second_BEGINNINGS'>
    Our journey so far
    </p>
</div>

{/* this is the code for the years  */}
    <div className='yearsandinfo' data-aos="zoom-in-left">
            <section >
       <p className='year'>
       2018
       </p>
       <p className='info'>
       From a YouTube channel that started in 2010, we became a feature-rich educational technology platform in 2015
       </p>
       </section>

       <section>
       <p className='year'>
       2019
       </p>
       <p className='info'>
       Became the biggest Live Learning platform with 200k+ daily active users who are learning with live classes       </p>
       </section>

       <section>
       <p className='year'>
       2020
       </p>
       <p className='info'>
       We acquired Kreatryx, PrepLadder and Codechef to encompass more avenues of learning, we also launched our own Graphy app for enjoying interactive stories & books       </p>
       </section>

       <section>
       <p className='year'>
       2022
       </p>
       <p className='info'>
       Revamped our entire learning experience on the app and launched it to all the learners via our first ever Unveil 1.0 event       </p>
       </section>
    </div>


    </div>
  )
}

export default OurJourney
