import React from 'react';
import './organization.css';


const JoinUs = () => {
  return (
        <div className="outer_join">
          <div className="info_join">
            <h2>Come Join Us</h2>
            <h1>Let's strengthen education for a better future!</h1>
            <p>Opportunities await for educators, developers.</p>

            <div className="butn_join">
              <a href="/courses" target="_blank">
                <span>Join Us</span>
              </a>
            </div>
          </div>

          <div className="team_join">
            <img src="https://blog.vantagecircle.com/content/images/2020/08/Importance-of-team-building.png" className="team_img" id='img_item'/>
          </div>
        </div>
  );
};

export default JoinUs;
