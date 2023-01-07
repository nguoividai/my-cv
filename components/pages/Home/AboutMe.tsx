import { Montserrat } from "@next/font/google";
import React from "react";
import { ABOUT_ME_HTML } from "seeders/AboutMe";

const mont = Montserrat({ subsets: ["latin"] });

const AboutMe = () => {
  return (
    <div
      data-aos="fade-down-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="content-area"
      id="about-me"
    >
      <div className={mont.className}>
        <h2>ABOUT ME</h2>
        <div className="article">
          <div dangerouslySetInnerHTML={{ __html: ABOUT_ME_HTML }} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(AboutMe);
