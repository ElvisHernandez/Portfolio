import React from "react";
import styles from "./Projects.module.css";
import { ProjectsCard } from "../../components";
import { projectsJSON } from "../../CONSTANTS/ProjectsConstants";

const Projects = () => {
  return (
    <div className={styles.projectsCanvas}>
      <div className={styles.projectsIntro}>
        <h1>Projects</h1>
        <div className={styles.projects}>
          {projectsJSON.map(
            ({ image, description, projectLink, codeLink, technologies }) => (
              <div className={styles.projectsContainer}>
                <h2 className={styles.technologyText}>Technologies Used:</h2>
                <ul className={styles.technologies}>
                  {technologies.map((tech) => (
                    <li>{tech}</li>
                  ))}
                </ul>
                <ProjectsCard
                  image={image}
                  description={description}
                  projectLink={projectLink}
                  codeLink={codeLink}
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
