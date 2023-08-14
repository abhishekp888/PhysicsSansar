import React from "react";
import "./StudentJourneyCss.css";
import img1 from "./WhatsApp Image 2023-07-18 at 11.57.35 AM (4).jpeg";
import img2 from "./WhatsApp Image 2023-07-18 at 11.57.35 AM (3).jpeg";
import img3 from "./WhatsApp Image 2023-07-18 at 11.57.35 AM (2).jpeg";
import img4 from "./WhatsApp Image 2023-07-18 at 11.57.35 AM (1).jpeg";
import img5 from "./WhatsApp Image 2023-07-18 at 11.57.35 AM.jpeg";

function StudentJourney() {
  return (
    <>
      <div className="Wrapper2">
        <div className="Row">
          <div className="Col-1">
            <div className="TextSection1">
              <h2 className="Head1">TOP PHYSICS LECTURES</h2>
              <p>Engaging video lectures by Best Faculty at Physics Sansar</p>
            </div>
            <div className="ImageSection_courese1">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="Col-2">
            <div className="TextSection1">
              <h2 className="Head1">BEST STUDY MATERIAL</h2>
              <p>
                Comprehensive Study Material with complete coverage of theory
              </p>
            </div>
            <div className="ImageSection_courese1">
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="Col-3">
            <div className="TextSection1">
              <h2 className="Head1">ONLINE TESTS</h2>
              <p>
                New pattern based online test to give hands on experience before
                Exam.
              </p>
            </div>
            <div className="ImageSection_courese1">
              <img src={img3} alt="" />
            </div>
          </div>
          <div id="Col4" className="Col-4">
            <div className="TextSection1">
              <h2 className="Head1">PERFORMANCE ANALYSIS</h2>
              <p>In-depth analysis of performance using AI based algorithm</p>
            </div>
            <div className="ImageSection_courese1">
              <img src={img4} alt="" />
            </div>
          </div>
          <div id="Col5" className="Col-5">
            <div className="TextSection1">
              <h2 className="Head1">ROADMAP TO SUCCESS</h2>
              <p>Engaging video lectures by Best Faculty</p>
            </div>
            <div className="ImageSection_courese1">
              <img src={img5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default StudentJourney;
