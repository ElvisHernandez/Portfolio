import React from "react";
import styles from "./Projects.module.css";
import { ProjectsCard } from "../../components";
import { projectsJSON } from "../../CONSTANTS/ProjectsConstants";

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projectsIntro}>
        <h1>Projects</h1>
      </div>
      <div className={styles.projects}>
        {projectsJSON.map(({ image, description, projectLink, codeLink }) => (
          <ProjectsCard
            image={image}
            description={description}
            projectLink={projectLink}
            codeLink={codeLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
