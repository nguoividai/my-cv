import { Montserrat } from "@next/font/google";
import RankProgress from "components/common/RankProgress";
import React from "react";

const mont = Montserrat({ subsets: ["latin"] });

const Experiences = () => {
  return (
    <div
      data-aos="fade-down-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="content-area"
      id="my-experiences"
    >
      <div className={mont.className}>
        <h2>MY EXPERIENCES</h2>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">06/2023 - NOW</div>
            <h3 className="timeline-title">Joblogic</h3>
            <div className="timeline-description">
              Frontend Developer - Mentor Newbie - Interviewer
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">10/2022 - 6/2023</div>
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
