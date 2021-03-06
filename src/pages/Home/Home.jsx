import React, { useEffect } from "react";
import styles from "./Home.module.css";
import { resume } from "../../assets";

const Home = () => {
  useEffect(() => {
    window.onload = () => {
      const currentViewWidth = window.innerWidth;
      const forceRadius = viewportToForceRadius(currentViewWidth);
      startAnimation(forceRadius);
    };
  }, []);

  function startAnimation(forceRadius) {
    const animationInitializer = document.createElement("script");
    animationInitializer.src = "./app.js";
    animationInitializer.id = "animationInitializer";
    animationInitializer.center = forceRadius;
    animationInitializer.particles = numberOfParticles(window.innerWidth);
    animationInitializer.async = true;
    document.body.appendChild(animationInitializer);
  }

  function viewportToForceRadius(viewport) {
    if (viewport > 900) return 350;
    else if (viewport > 600) return 250;
    else return 100;
  }

  function numberOfParticles(viewportWidth) {
    if (viewportWidth > 900) return 160;
    else if (viewportWidth > 600) return 130;
    else return 60;
  }

  return (
    <>
      <section id="particles-js" className={styles.particlesJs}>
        <span className={styles.intro}>
          Full-Stack <span className={styles.name}>Web Developer</span> <br />{" "}
          and Problem Solver <br />
          <a href={resume} download>
            <button
              type="button"
              className={`btn btn-outline-success ${styles.resume}`}
            >
              Download Resume
            </button>
          </a>
        </span>
      </section>
    </>
  );
};

export default Home;
