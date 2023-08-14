import React from 'react';
import './Numbers.css';
import img1 from './Courses.png'
import img2 from './Expert Mentors.png'
import img3 from './Global Students.png'


const Numbers = () => {
  return (
    <div className="outernum">
      <div className="numbers">
        <div className="num_div">
          <span className="num_img">
            <div>
              <img src={img1} alt="Courses" />
            </div>
          </span>
          <span className="num_content">
            <h1>10k+</h1>
            <p>Total Courses</p>
          </span>
        </div>

        <div className="num_div">
          <span className="num_img">
            <div>
              <img src={img2} alt="Expert Mentors" />
            </div>
          </span>
          <span className="num_content">
            <h1>500+</h1>
            <p>Expert Mentors</p>
          </span>
        </div>

        <div className="num_div">
          <span className="num_img">
            <div>
              <img src={img3} alt="Global Students" />
            </div>
          </span>
          <span className="num_content">
            <h1>300k+</h1>
            <p>Students Globally</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
