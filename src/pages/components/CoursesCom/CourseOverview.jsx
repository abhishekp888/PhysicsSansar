import React from 'react';
import './CourseOverview.css';
import img1 from './courseimg.jpg';


function CourseOverview() {
  return (
    <div className="Wrapper">
      <div className="CourseOverview">
        <div className="ReverseText">
          <div className="WelcomeText">
            <p>
              Welcome to <strong style={{ color: 'white' }}>Physics Sansar</strong> Family
            </p>
          </div>
          <h1>Sankalp Batch - JEE Main and Adv Physics</h1>
          <div className="CourseDescription">
            <p>
              A comprehensive program that covers the fundamentals of data structures and algorithms.
              It includes lectures and exercises to help students design and implement efficient solutions.
              This course is suitable for beginners and experienced programmers and aims to prepare students
              for technical interviews and placement exams
            </p>
          </div>

          <div className="CourseBottom">
            <div>
              <p className="CourseRating">4.5 <i className="fa-regular fa-star"></i></p>
            </div>
            <div>
              <p className="CourseLanguage">
                <i className="fa-solid fa-language"></i>&nbsp;English
              </p>
            </div>
            <div>
              <p className="CourseLecs">
                <i className="fa-solid fa-video"></i> &nbsp;50+ Lecs
              </p>
            </div>
          </div>
        </div>
        <div className="BriefDetails">
          <div className="CourseImg">
            <img className="Image" src={img1} alt="" />
          </div>
          <button type="button" className="PurchaseButton">Buy Course</button>
          <div className="CourseInfo">
            <ul>
              <li><p className='point_course'>No Pre-requisite Required</p></li>
              <li><p className='point_course'>150+ hours On-Demand Video</p></li>
              <li><p className='point_course'>300+ Coding Questions</p></li>
              <li><p className='point_course'>Live Interview Preparation & mentorship sessions</p></li>
              <li><p className='point_course'>Live Resume Preparation</p></li>
              <li><p className='point_course'>DSA - Beginner to Advanced with Doubt Assistance</p></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="CourseDetails"></div>
    </div>
  );
}

export default CourseOverview;
