import { Montserrat } from "@next/font/google";
import React from "react";

const mont = Montserrat({ subsets: ["latin"] });

const Top = () => {
  return (
    <div className="content-area" id="name">
      <div className={mont.className}>
        <h1>
          Le Ky <br />
          Lan
        </h1>
        <p className="my-description">Freelance Web Developer</p>
      </div>
    </div>
  );
};

export default React.memo(Top);
