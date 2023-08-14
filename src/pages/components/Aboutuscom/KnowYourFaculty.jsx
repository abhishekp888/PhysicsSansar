import React from "react";
import "./KnowYourFaculty.css";
import RaviImg from "./ravisir.jpg";
import img1 from "./WhatsApp Image 2023-07-18 at 4.47.24 PM (1).jpeg";
import img2 from "./WhatsApp Image 2023-07-18 at 4.47.24 PM (2).jpeg";
import img3 from "./WhatsApp Image 2023-07-18 at 4.47.24 PM (3).jpeg";
import img4 from "./WhatsApp Image 2023-07-18 at 4.47.24 PM.jpeg";
import img5 from "./WhatsApp Image 2023-07-25 at 2.01.45 PM.jpeg";

const KnowYourFaculty = () => {
  return (
    <div>
      <div className="KnowYourFaculty">
        <div className="wrapper">
          <div className="ImageSect">
            <img
              className="raviImg"
              src={RaviImg}
              alt="Ravi Sir Image"
              id="Ravi"
            />
          </div>
          <div className="TextSection">
            <p id="subtitle">
              {/* <i>style="font-size: 20px;" class="fa-regular fa-address-card"</i> */}
              About Ravi Sir
            </p>
            <div className="RaviHead">
              <h2 id="Head">Ravi Bhushan Sir (IIT-Delhi) </h2>
            </div>
            <h3 class="abouthead">
              Welcomes you to the world of physics at Physics Sansar
            </h3>
            <p>
              "I have groomed more than 1000 IITians , 500 NITians and an equal
              no of doctors to achieve their target. I have been visiting
              faculty of electrical engineering in various engineering colleges
              and worked as the senior faculty of physics in premier IIT JEE
              institutions. Through all my experience in teaching I wish to
              spread the quality education in most affordable price to every
              student of the nation."
            </p>
            <div className="Achievements">
              <div className="AchRow">
                <div className="AchMt">
                  <img className="ImgAch" src={img5} alt="" />

                  <p>
                    Groomed more than 1000+ IITians, 500+ NITians and doctors
                  </p>
                </div>
                <div className="AchMt">
                  <img className="ImgAch" src={img3} alt="" />
                  <p>Teaching experience of more than 15+ years</p>
                </div>
              </div>

              <div className="AchRow">
                <div className="AchMt">
                  <img className="ImgAch" src={img5} alt="" />
                  <p>Mentored over "Half a lakh" of JEE/NEET Aspirants</p>
                </div>
                <div className="AchMt">
                  <img className="ImgAch" src={img3} alt="" />
                  <p>Excellent faculty with deep root knowledge in physics</p>
                </div>
              </div>
            </div>
            <h3 className="rolehead">One Man, Different Roles</h3>
            <div className="roles">
              <div className="role">
                <p>Faculty</p>
                <img className="ImgRole" src={img2} alt="" />
              </div>
              <div className="role">
                <p>Mentor</p>
                <img className="ImgRole" src={img1} alt="" />
              </div>
              <div className="role">
                <p>Guardian</p>
                <img className="ImgRole" src={img4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowYourFaculty;
