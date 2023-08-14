import React, { useEffect } from 'react';
import './upcoming_courses.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const UpcomingCourses = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <p className='heading_upcoming12'>Our Upcoming Courses</p>
      <div className='main_upcoming_courses' data-aos="fade-up">
        <div className='upcoming_courses_img'>
          <img src='https://www.quantemjeeacademy.com/assets/images/portfolio/c3.jpg' alt="upcoming" />
        </div>
        <hr />
        <div className='upcoming_courses_info'>
          <button className='coming_soon'>coming soon</button>
        </div>
      </div>
    </>
  );
}

export default UpcomingCourses;
