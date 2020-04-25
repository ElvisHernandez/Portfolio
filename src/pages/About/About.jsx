import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutSection}>
      <h1 className={styles.aboutMeIntro}>About Me</h1>

      <section className={styles.aboutMe}>
        <div className={styles.image}></div>
        <div className={styles.description}></div>
      </section>
    </div>
  );
};

export default About;
