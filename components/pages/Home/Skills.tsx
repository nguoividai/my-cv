import { Montserrat } from "@next/font/google";
import RankProgress from "components/common/RankProgress";
import React from "react";

const mont = Montserrat({ subsets: ["latin"] });

const Skills = () => {
  return (
    <div
      data-aos="fade-down-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="content-area"
      id="my-skills"
    >
      <div className={mont.className}>
        <h2>MY SKILLS</h2>

        <div className="row">
          <div className="col-12 col-lg-6">
            <RankProgress title="REACT JS" percent={80} />
          </div>
          <div className="col-12 col-lg-6">
            <RankProgress title="JAVASCRIPT" percent={80} />
          </div>
          <div className="col-12 col-lg-6">
            <RankProgress title="CSS" percent={75} />
          </div>
          <div className="col-12 col-lg-6">
            <RankProgress title="HTML" percent={75} />
          </div>
          <div className="col-12 col-lg-6">
            <RankProgress title="TYPESCRIPT" percent={75} />
          </div>
          <div className="col-12 col-lg-6">
            <RankProgress title="JQUERY" percent={70} />
          </div>
          <div className="col-12 col-lg-6">
            <RankProgress title="GIT" percent={60} />
          </div>
          <div className="col-12 col-lg-6">
            <RankProgress title="JEST (TDD)" percent={60} />
          </div>
          <div className="col-12 col-lg-6">
            <RankProgress title="PHOTOSHOP" percent={60} />
          </div>
          <div className="col-12 col-lg-6">
            <RankProgress title="VUE JS" percent={50} />
          </div>
          <div className="col-12 col-lg-6">
            <RankProgress title="NEXT JS" percent={50} />
          </div>
          <div className="col-12 col-lg-6">
            <RankProgress title="PHP / LARAVEL / WORDPRESS" percent={50} />
          </div>
          <div className="col-12 col-lg-6">
            <RankProgress title="ENGLISH" percent={40} />
          </div>
          <div className="col-12 col-lg-6">
            <RankProgress title="EXPRESS JS" percent={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Skills);
