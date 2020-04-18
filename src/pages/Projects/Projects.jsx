import React from "react";
import styles from "./Projects.module.css";
import { ProjectsCard } from "../../components";
import {
  ssImage,
  ssDescription,
  ssProjectLink,
  ssCodeLink,
  aaImage,
  aaDescription,
  aaProjectLink,
  aaCodeLink,
} from "../../CONSTANTS/ProjectsConstants";

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projectsIntro}>
        <h1>Projects</h1>
      </div>
      <div className={styles.projects}>
        <ProjectsCard
          image={ssImage}
          description={ssDescription}
          projectLink={ssProjectLink}
          codeLink={ssCodeLink}
        />
        <ProjectsCard
          image={aaImage}
          description={aaDescription}
          projectLink={aaProjectLink}
          codeLink={aaCodeLink}
        />
      </div>
    </div>
  );
};

export default Projects;
