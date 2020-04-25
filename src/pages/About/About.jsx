import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutSection}>
      <h1 className={styles.aboutMeIntro}>About Me</h1>

      <section className={styles.aboutMe}>
        <div className={styles.image}></div>
        <div className={styles.description}>
          {" "}
          <br />
          Hi there, my name is <span className={styles.name}>Elvis</span>.{" "}
          <br /> <br />
          I'm a full-stack web developer with a passion for learning and problem
          solving. It was through my education in physics that I discovered my
          love for computers and the amazingly rich set of problems that they
          enable one to solve. <br /> <br />
          <span className={styles.quote}>
            “Nobody ever figures out what life is all about, and it doesn't
            matter. Explore the world. Nearly everything is really interesting
            if you go into it deeply enough.” ― Richard P. Feynman{" "}
          </span>
        </div>
      </section>
    </div>
  );
};

export default About;
