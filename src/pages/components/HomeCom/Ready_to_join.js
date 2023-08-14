import React from 'react'
import './Ready_to_joinCss.css'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Ready_to_join = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="Ready_to_join" data-aos="zoom-in">
    <div className="Ready_to_join-content">
      <h3>Ready to join?</h3>
      <p>Learn from experienced and knowledgeable instructors who are experts in their respective fields, ensuring high-quality education.</p>

    </div>
    <div className="Ready_to_join-content-btn">
    <a href='/Courses'><button type="button">Register Now</button></a>
    </div>
  </div>
  )
}

export default Ready_to_join
