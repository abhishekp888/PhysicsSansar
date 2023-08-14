import React from 'react';
import './headerResult.css';

const headerResult = () => {
  return (
    <div className='main_HeaderReasult'>

      {/* Div for information */}
      <div className='main_HeaderReasult_info'>
        <p className='main_info'>Getting Quality Education Is Now More Easy</p>
        <p className='sub_info'>
          Provides you with the latest online learning system and material that help your knowledge growing.
        </p>

        <div className='main_HeaderReasult_buttons'>
          <a href='/Courses'>
            <button>Get Started</button>
          </a>
        </div>
      </div>

      {/* Div for the image */}
      <div className='main_HeaderReasult_img'>
        <img src="https://www.saremeducation.com/wp-content/uploads/2022/07/admission.png" alt="person having books" />
      </div>

    </div>
  );
};

export default headerResult;
