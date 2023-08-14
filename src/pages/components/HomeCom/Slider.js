import React, { useState, useEffect } from 'react';
import './SliderCSS.css';
import img from "./1.jpg";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  function plusSlides(n) {
    setSlideIndex((prev) => prev + n);
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }

  function showSlides(n) {
    const slides = document.querySelectorAll('.mySlides');
    const dots = document.querySelectorAll('.dot');

    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(slides.length);
    }

    slides.forEach((slide, index) => {
      slide.style.display = index === slideIndex - 1 ? 'block' : 'none';
    });

    dots.forEach((dot, index) => {
      dot.className = index === slideIndex - 1 ? 'dot active' : 'dot';
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <div className="mySlides fade">
        <div className="numbertext">1</div>
        <img src={img} alt="Slide 1" />
      </div>

      <div className="mySlides fade">
        <div className="numbertext">2</div>
        <img src="https://cdn.digital.allen.ac.in/fe-bsite/home_page_slider/Olympaid_very_new_desktop.jpg" alt="Slide 2" />
      </div>

      <div className="mySlides fade">
        <div className="numbertext">3</div>
        <img src="https://cdn.digital.allen.ac.in/fe-bsite/home_page_slider/NCERT_new_desktop.jpg" alt="Slide 3" />
      </div>

      <div className="mySlides fade">
        <div className="numbertext">4</div>
        <img src="https://cdn.digital.allen.ac.in/fe-bsite/home_page_slider/jee-schloarship-desktop.jpg" alt="Slide 3" />
      </div>


      <div style={{ textAlign: 'center' }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
        <span className="dot" onClick={() => currentSlide(4)}></span>
      </div>
    </div>
  );
};

export default Slider;
