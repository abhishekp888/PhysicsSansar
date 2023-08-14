import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Typing_Animation.css';
import AOS from 'aos';


const TypingAnimation = () => {
  const [isWindowSmall, setIsWindowSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWindowSmall(window.innerWidth <= 510);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);


  return (
    <div className='TypingAnimation_main' data-aos="zoom-in">
      <p className='typing_main'>
        THE MOST  &#160;
        {isWindowSmall && <br />}
        <TypeAnimation
          sequence={[
            "RELIABLE",
            1500,
            'VALUABLE',
            1500,
            'AFFORDABLE',
            1500,
          ]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: '50px',
            fontWeight: '900',
            display: 'inline-block',
            color: 'rgb(0,0,0)'
          }}
          repeat={Infinity}
        />
        <br />
        LEARNING PLATFORM
      </p>
      <button className='join_us'>
        join us
      </button>
    </div>
  );
}

export default TypingAnimation;
