import React from "react";
import "./AboutRavisir.css";
import AOS from "aos";
import { useEffect } from "react";

const AboutRaviSir = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-ravi-sir" data-aos="fade-up" data-aos-duration="3000">
      <div className="image-container">
        <img
          src="https://www.quantemjeeacademy.com/assets/images/about/about.jpg"
          alt="ravi sir"
        />
      </div>

      <div className="text-container">
        <p className="text-container_name">Ravi Bhushan Sir (IIT - Delhi)</p>
        <p className="text-container_vision">Man With A Vision & Purpose</p>

        <p className="text-container_info">
          Ravi Bhushan Sir has a vision in his mind - to make quality education
          accessible to each and every student of India. He passionately strives
          to provide top-notch education to every student in India, fostering an
          inclusive and brighter future for all.
        </p>

        <a href="/About">
          {" "}
          <button>Read more &#8680;</button>
        </a>
      </div>
    </div>
  );
};

export default AboutRaviSir;
