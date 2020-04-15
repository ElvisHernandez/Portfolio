import React from 'react';
import styles from './Projects.module.css'
import { ProjectsCard } from '../../components'
import { ssImage, ssDescription, ssProjectLink, ssCodeLink } from '../../CONSTANTS/ProjectsConstants'


const Projects = () => {
    return (
        <div className={styles.projectsContainer}>
            
            <div className={styles.projectsIntro}><h1>Projects</h1></div>
            <div className={styles.projects}>
                <ProjectsCard 
                    image={ssImage}
                    description={ssDescription}
                    projectLink={ssProjectLink}
                    codeLink={ssCodeLink}
                />
                {/* <span className={`${styles.project} ${styles.project1}`}>
                    <p className={styles.project1Text}>Soft Search is a career search web application specifically created for Software Development.</p>
                    <Button className={styles.projectButton}>View Project</Button>
                    <Button className={styles.codeButton}>View Code</Button>

                </span>
                <span className={`${styles.project} ${styles.project2}`}>

                    <Button className={styles.projectButton}>View Project</Button>
                    <Button className={styles.codeButton}>View Code</Button>
                </span> */}

            </div>
        </div>
    );
}
 
export default Projects;