import React from 'react';
import './MISSION.css'
import CountUp, { useCountUp } from 'react-countup';

const MISSION = () => {
  return (
    <div className='main_MISSION'>
      <div className='missionTitle'>
        <h1 className='our_mission'>OUR MISSION & IMPACT</h1>
        <p className='tital'>Democratise access to high-quality education</p>
      </div>

      <div className='statisticalAnalysis'>
        <div className='Analysis'>
          <span>
            <p className='count' style={{ color: ' rgb(255, 255, 255)' }}><CountUp end={50}enableScrollSpy style={{ color: 'rgb(255, 255, 255)' }}/>M+</p>
            <p className='on'>Active Learners</p>
          </span>

          <span>
            <p className='count' style={{ color: 'rgb(255, 255, 255)' }}><CountUp end={1000}enableScrollSpy style={{ color: 'rgb(255, 255, 255)' }}/>+</p>
            <p className='on'>Top Educators</p>
          </span>

          <span>
            <p className='count' style={{ color: 'rgb(255, 255, 255)' }}><CountUp end={100} enableScrollSpy style={{ color: 'rgb(255, 255, 255)' }}/>M+</p>
            <p className='on'>Minutes Watched</p>
          </span>

          <span>
            <p className='count' style={{ color: 'rgb(255, 255, 255)' }}><CountUp end={2000} enableScrollSpy style={{ color: 'rgb(255, 255, 255)' }}/>+</p>
            <p className='on'>Daily live Classes</p>
          </span>
        </div>

        <div className='app_img'>
          <img className='app_img1' src='https://i.pinimg.com/originals/d9/6e/ba/d96ebae561a0754bb30808dbba2f6f5f.jpg' alt='' />
        </div>
      </div>
    </div>
  );
};

export default MISSION;
