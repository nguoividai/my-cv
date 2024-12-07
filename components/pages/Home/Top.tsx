import { Montserrat } from "@next/font/google";
import React from "react";

const mont = Montserrat({ subsets: ["latin"] });

const Top = () => {
  return (
    <div
      data-aos="fade-down-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="content-area"
      id="name"
    >
      <div className={mont.className}>
        <h1>
          Le Ky <br />
          Lan
        </h1>
        <p className="my-description">Fullstack Web Developer</p>
      </div>
    </div>
  );
};

export default React.memo(Top);
