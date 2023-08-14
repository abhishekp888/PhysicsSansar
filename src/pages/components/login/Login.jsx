import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Login.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here, e.g., send username and password to the server
    console.log('Submitted:', { username, password });
    // Reset form fields
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login_main_body">

      <div className='Swiper'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000" alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg" alt="Slide 3" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="form">
        <p className="login_heading">Hello Again!</p>
        <p className="login_sub">Welcome back. Let's work on your skills with the Physics Sansar.</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" value={username} onChange={handleUsernameChange} />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} />

          <button type="submit">Login</button>
        </form>

        <p className="sign_up_link">
          Don't have an account yet? <a href="/SignUP">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
