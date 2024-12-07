import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../layout/Layout";
import { ReactElement, useEffect } from "react";
import Top from "../components/pages/Home/Top";
import Navigator from "../components/pages/Home/Navigator";
import AboutMe from "components/pages/Home/AboutMe";
import Skills from "components/pages/Home/Skills";
import Experiences from "components/pages/Home/Experiences";
import Projects from "components/pages/Home/Projects";
import Contact from "components/pages/Home/Contact";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Le Ky Lan</title>
        <meta name="description" content="CV - Le Ky Lan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/top-logo.svg" />
        <meta property="og:title" content="CV - Le Ky Lan" />
        <meta property="og:description" content="Fullstack Web Developer" />
      </Head>
      <main className={styles.main}>
        <div
          style={{ rowGap: 40 }}
          className="row flex-column-reverse flex-sm-column-reverse flex-md-row"
        >
          <div className="col-12 col-md-8 col-lg-9">
            <Top />

            <AboutMe />

            <Skills />

            <Experiences />

            <Projects />

            <Contact />
          </div>
          <div className="col-12 col-md-4 col-lg-3 navigator">
            <Navigator />
          </div>
        </div>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
