import { Montserrat } from "@next/font/google";
import RankProgress from "components/common/RankProgress";
import Link from "next/link";
import React from "react";

const mont = Montserrat({ subsets: ["latin"] });

const Contact = () => {
  return (
    <div
      data-aos="fade-down-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="content-area"
      id="contact"
    >
      <div className={mont.className}>
        <h2>CONTACT</h2>

        <div className="row" style={{ rowGap: 25 }}>
          <div className="col-12 col-lg-4">
            <strong>STAY IN TOUCH</strong>

            <div style={{ marginTop: 15 }}>
              <p>
                <Link href="mailto: lekylanviboko@gmail.com">
                  lekylanviboko@gmail.com
                </Link>
              </p>
              <p style={{ marginTop: 10 }}>
                <Link href="tel: 077 3333 357">077 3333 357</Link>
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <strong>SOCIAL</strong>
            <div style={{ marginTop: 15 }}>
              <p>
                <Link href="https://github.com/nguoividai" target="_blank">
                  Github
                </Link>
              </p>
              <p style={{ marginTop: 10 }}>
                <Link href="https://gitlab.com/jaykyle" target="_blank">
                  Gitlab
                </Link>
              </p>
              <p style={{ marginTop: 10 }}>
                <Link
                  href="https://www.facebook.com/lekylanviboko/"
                  target="_blank"
                >
                  Facebook
                </Link>
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <strong>ADDRESS</strong>
            <div style={{ marginTop: 15 }}>
              <p>District 8, Ho Chi Minh City</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Contact);
