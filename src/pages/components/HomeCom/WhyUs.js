import React from 'react'
import './WhyUsCss.css'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import imgani from "./pngwing.com (4).png"
import imgani2 from "./pngwing.com (1).png";
import imgani3 from "./pngwing.com (2).png";
import imgani4 from "./pngwing.com (3).png";


const WhyUs = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
    <div className='WhyUS_main_div'>
        <div className='Why_us_Heading' data-aos="fade-up"
     data-aos-duration="3000">
            <p className='big'>Why Physics Sansar?</p>
            <p className='success'>Your One Stop Destination For Success</p>
        </div>
 {/* this is the div for the points of the why section */}

 <div className='main_div'>

    {/* this is the first section of info */}

    <div className='section first' data-aos="zoom-in-right">
     <img className='info_img' src='https://www.pw.live/version14/assets/img/group-20356.svg' alt='Live'/>
      <div>
        <p className='title'>Ocean of knowledge</p>
        <p className='infoHome'>
        Courses covers all essential topics and providing in-depth knowledge.
Regular improvement based on feedback and industry advancements, ensuring students receive the most up-to-date and relevant education.</p>
      </div>

    </div>

    <div className='dir'><img  src='https://www.pw.live/version14/assets/img/group-20364.svg' alt='dir'/></div>

    {/* this is second */}

    <div className='section' data-aos="zoom-in-left">
      <div>
        <p className='title'>Expert Faculty</p>
        <p className='infoHome'>
        Learn from experienced and knowledgeable instructors who are experts in their respective fields, ensuring high-quality education.</p>
      </div>
      <img className='info_img' src='https://www.pw.live/version14/assets/img/group-20360.svg' alt='Live'/>
    </div>

    <div className='dir'><img  src='https://www.pw.live/version14/assets/img/group-20365.svg' alt='dir'/></div>


   {/* this thired */}

   <div className='section' data-aos="zoom-in-right">
     <img className='info_img' src='https://www.pw.live/version14/assets/img/group-20358.svg' alt='Live'/>
      <div>
        <p className='title'>Interactive Learning</p>
        <p className='infoHome'>
        Interact with expert mentors and solve your all queries with them. Interact with students whole across the world, perform various group activities, discussion to foster engagement and active learning.  </p>
      </div>

    </div>

    <div className='dir'><img  src='https://www.pw.live/version14/assets/img/group-20364.svg' alt='dir'/></div>

    {/* this is last */}

    <div className='section last' data-aos="zoom-in-left">
      <div>
        <p className='title'>Affordable Learning</p>
        <p className='infoHome'>
        We try to make learning more approachable and affordable to all people by having the lowest fee structure in the entire city with EMI plans.</p>
      </div>
      <img className='info_img' src='https://www.pw.live/version14/assets/img/group-20359.svg' alt='Live'/>
      </div>
 </div>

 <img className='App-logo' src={imgani} alt='atom' data-aos="fade-up"
     data-aos-duration="3000"/>
<img className='floating' src={imgani2} alt='wavlength'data-aos="fade-up"
     data-aos-duration="3000"/>
<img className='floating mag' src={imgani3} alt='wavlength'data-aos="fade-up"
     data-aos-duration="3000"/>
<img className='floating enr' src={imgani4} alt='wavlength'data-aos="fade-up"
     data-aos-duration="3000"/>
    </div>

    </>
  )
}

export default WhyUs
