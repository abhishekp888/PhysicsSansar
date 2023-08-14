import React, { useEffect } from 'react';
import './Navbar_css.css';
import icon from './WhatsApp Image 2023-07-25 at 2.01.46 PM.jpeg';
import menu_img from './menu-bar.png';
import x_icon_img from './x-mark.png';
import icon_login from './icons8-login-48 (1).png';

const Navbar = () => {
  useEffect(() => {
    const menuBtn = document.querySelector('.mobile_menu');
    const activeHeader = document.querySelector('.header');

    const toggleNavbar = () => {
      activeHeader.classList.toggle('active');
    };

    menuBtn.addEventListener('click', toggleNavbar);

    return () => {
      menuBtn.removeEventListener('click', toggleNavbar);
    };
  }, []);

  return (
    <div>
      <section id="Navbar" className="header">
        <div className="outer_nav">
          <div className="about_company">
            <img src={icon} alt="icon" className="icon_physid_sansar" />
          </div>

          <nav className="nav_links">
            <span>
              <a href="/">Home</a>
            </span>
            <span>
              <a href="/About">About Us</a>
            </span>
            <span>
              <a href="/Courses">Courses</a>
            </span>
            <span>
              <a href="/Results">Results</a>
            </span>
            <span>
              <a href="/Contact">Contact</a>
            </span>
          </nav>

          <div className="left_part">
            <div className="register">
              <div className="login_box">
                <a href="/login">
                  <span>
                    <img className="img_login" src={icon_login} alt="img" />
                      <p className="login">Login</p>
                  </span>
                </a>
              </div>
            </div>

            <div className="menu_bar">
              <span className="mobile_menu">
                <img
                  name="menu-outline"
                  src={menu_img}
                  alt="menu"
                  className="menu_icon"
                />
                <img
                  name="close-outline"
                  src={x_icon_img}
                  alt="x-mark"
                  className="menu_icon"
                />
              </span>
            </div>
          </div>
        </div>

        <nav className="hidden_navbar">
          <div className="second_nav">
            <span>
              <a href="/">Home</a>
            </span>
            <span>
              <a href="/About">About Us</a>
            </span>
            <span>
              <a href="/Courses">Courses</a>
            </span>
            <span>
              <a href="/Results">Results</a>
            </span>
            <span>
              <a href="/Contact">Contact</a>
            </span>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
