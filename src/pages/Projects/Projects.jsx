import React from 'react';
import styles from './Projects.module.css'

const Projects = () => {
    return (
        <div className={styles.projectsContainer}>
            <div className={styles.projectsIntro}><h1>Projects</h1></div>
            {/* <div className={styles.projects}></div> */}
            <div className={styles.projects}>
                <span className={styles.project1}>Project 1</span>
                <span className={styles.project2}>Project 2</span>
            </div>
        </div>
    );
}
 
export default Projects;