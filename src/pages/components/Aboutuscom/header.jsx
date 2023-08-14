import React from 'react';
import video from './Unacademy _ Cracking the Game.mp4';
import './header.css';

const Header = () => {
  return (
    <div className="main_header">
      <video id="background-video" autoPlay muted loop poster="https://assets.codepen.io/6093409/river.jpg">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Header;
