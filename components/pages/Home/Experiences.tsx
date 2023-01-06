import { Montserrat } from "@next/font/google";
import RankProgress from "components/common/RankProgress";
import React from "react";

const mont = Montserrat({ subsets: ["latin"] });

const Experiences = () => {
  return (
    <div className="content-area" id="my-experiences">
      <div className={mont.className}>
        <h2>MY EXPERIENCES</h2>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">10/2022 - NOW</div>
            <h3 className="timeline-title">Freelance</h3>
            <div className="timeline-description">Frontend Developer</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">6/2018 - 9/2022</div>
            <h3 className="timeline-title">ICT24H</h3>
            <div className="timeline-description">
              Frontend Developer - Mentor interns
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">9/2014 - 4/2019</div>
            <h3 className="timeline-title">Saigon University</h3>
            <div className="timeline-description">
              Bachelor in Electronic and Electrical Engineering Technolog
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Experiences);
