import React from 'react';
import './OurCourese.css';

import AOS from 'aos';
import { useEffect } from 'react';


const OurCourses = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const coursesData = [
    {
      title: 'Web Development Master Course @dot Batch',
      image: 'https://www.quantemjeeacademy.com/assets/images/portfolio/c3.jpg',
      description: '₹4500',
    },
    {
      title: 'Data Structures & Algorithms BootCamp @Supreme Batch',
      image: 'https://www.quantemjeeacademy.com/assets/images/portfolio/c3.jpg',
      description: '₹3500',
    },
    {
      title: 'Data Structures & Algorithms BootCamp @Supreme Batch',
      image: 'https://www.quantemjeeacademy.com/assets/images/portfolio/c3.jpg',
      description: '₹3500',
    }, {
      title: 'Data Structures & Algorithms BootCamp @Supreme Batch',
      image: 'https://www.quantemjeeacademy.com/assets/images/portfolio/c3.jpg',
      description: '₹3500',
    }
  ]

  return (
    <>
<div className="courses-container">
      <p className="courses-heading">Available Courses</p>
      <div className="course-list">
        {coursesData.map((course, index) => (
          <div className="course-card" key={index} data-aos="zoom-in">
            <img className="course-image" src={course.image} alt={course.title} />
            <h2 className="course-title">{course.title}</h2>
            <p className="course-description">{course.description}</p>
            <button className='Buy_now'>Buy now</button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default OurCourses;
