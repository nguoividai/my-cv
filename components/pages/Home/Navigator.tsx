import { Montserrat } from "@next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const mont = Montserrat({ subsets: ["latin"] });

const Navigator = () => {
  const [active, setActive] = useState<string | undefined>();
  const { asPath } = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const sortedEntries = entries.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        );

        if (sortedEntries[0].intersectionRatio > 0) {
          setActive("#" + sortedEntries[0].target.id);
        }
      },
      {
        threshold: 0.5,
      }
    );

    const sections = document.querySelectorAll(".content-area"); // Các phần tử cần theo dõi
    sections.forEach((section) => observer.observe(section));

    // Clean up observer khi component unmount
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const hash = (asPath as string).split("#")[1];
    setActive("#" + hash);
  }, [asPath]);

  return (
    <div className={mont.className}>
      <ul className="nav">
        <li className="item">
          <Link className={active === "#name" ? "active" : ""} href="#name">
            <span className="counter">01</span>
            <span className="content">NAME</span>
          </Link>
        </li>
        <li className="item">
          <Link
            className={active === "#about-me" ? "active" : ""}
            href="#about-me"
          >
            <span className="counter">02</span>
            <span className="content">ABOUT ME</span>
          </Link>
        </li>
        <li className="item">
          <Link
            className={active === "#my-skills" ? "active" : ""}
            href="#my-skills"
          >
            <span className="counter">03</span>
            <span className="content">MY SKILLS</span>
          </Link>
        </li>
        <li className="item">
          <Link
            className={active === "#my-experiences" ? "active" : ""}
            href="#my-experiences"
          >
            <span className="counter">04</span>
            <span className="content">MY EXPERIENCES</span>
          </Link>
        </li>
        <li className="item">
          <Link
            className={active === "#my-projects" ? "active" : ""}
            href="#my-projects"
          >
            <span className="counter">05</span>
            <span className="content">MY PROJECTS</span>
          </Link>
        </li>
        <li className="item">
          <Link
            className={active === "#contact" ? "active" : ""}
            href="#contact"
          >
            <span className="counter">06</span>
            <span className="content">CONTACT</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(Navigator);
