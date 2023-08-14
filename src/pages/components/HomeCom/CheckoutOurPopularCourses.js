import React from 'react';
import './CoureseCss.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import medical from './—Pngtree—hand drawn cartoon medical research_5507437.png'


const CheckoutOurPopularCourses = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className='Courses_main'>
      <span>
        <div className='big-font-size'>Checkout Our Popular Courses</div>
      </span>

      <div className='Courses'>
        <div className='Course one' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
          <div className='heading'>
            Engineering
          </div>
          <img src='https://fr.issquaredinc.com/static/Infrastructure-Management-and-performance-monitoring.png' alt='Engineering' className='eng_img'></img>
          <hr/>
          <div className='best_lines'>
            <p>
            "Rise to the Challenge, Conquer the JEE - Be the Architect of Your Dreams!"
            </p>
          </div>
          <div className='click'>
           <button className='CheckMore'><a href='/Courses'>Explore Our Courses</a></button>
          </div>
        </div>

        <div className='Course two'data-aos="zoom-in">
          <div className='heading'>
            Medical
          </div>
          <img src={medical} alt='Engineering' className='eng_img'/>
          <hr/>
          <div className='best_lines'>
          <p>
          "Empower Your Calling, Cure and Care - NEET Beckons, Rise and Dare!"
          </p>
          </div>
          <div className='click'>
          <button className='CheckMore'><a href='/Courses'>Explore Our Courses</a></button>
          </div>
        </div>

        <div className='Course three' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
          <div className='heading'>
            Foundation
          </div>
          <img src='https://www.caclubindia.com/img/preview/custom/20210223065809_guide.jpg?imgver=44071' alt='Engineering' className='eng_img'/>
          <hr/>
          <div className='best_lines'>
            <p>
            "Strong Roots, Bright Future - Foundation Courses, Your Path to Success!"
            </p>
          </div>
          <div className='click'>
          <button className='CheckMore'><a href='/Courses'>Explore Our Courses</a></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutOurPopularCourses;
