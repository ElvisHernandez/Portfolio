import React from 'react';
import styles from './Projects.module.css'
import { airAware, softSearch } from '../../assets'

const Projects = () => {
    return (
        <div className={styles.projectsContainer}>
            <div className={styles.projectsIntro}><h1>Projects</h1></div>
            {/* <div className={styles.projects}></div> */}
            <div className={styles.projects}>
                <span className={`${styles.project} ${styles.project1}`}>
                    <button className={styles.projectButton}>View Project</button>
                    <button className={styles.codeButton}>View Code</button>
                </span>
                <span className={`${styles.project} ${styles.project2}`}>
                    <button className={styles.projectButton}>View Project</button>
                    <button className={styles.codeButton}>View Code</button>
                </span>
                {/* <img className={styles.project} src={softSearch} alt="#" /> */}
                {/* <img className={styles.project} src={airAware} alt="#" /> */}
            </div>
        </div>
    );
}
 
export default Projects;