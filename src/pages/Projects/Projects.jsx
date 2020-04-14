import React from 'react';
import styles from './Projects.module.css'
import { airAware, softSearch } from '../../assets'
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const GlobalCSS = withStyles({
    "@global": {
        ".MuiButton-root": {
            display: 'none',
            background: '#228B22',
            color: 'whitesmoke',
            marginBottom: '1rem'
        },
        ".MuiButton-root:hover": {
            background: 'whitesmoke',
            color: '#228B22',
        }
    }
})(() => null)

const Projects = () => {
    return (
        <div className={styles.projectsContainer}>
            <GlobalCSS />
            <div className={styles.projectsIntro}><h1>Projects</h1> <Button style={{paddingLeft: '20rem'}}/></div>
            <div className={styles.projects}>
                <span className={`${styles.project} ${styles.project1}`}>
                    {/* <button className={styles.projectButton}>View Project</button> */}
                    {/* <button className={styles.codeButton}>View Code</button> */}
                    <Button className={styles.projectButton}>View Project</Button>
                    <Button className={styles.codeButton}>View Code</Button>

                </span>
                <span className={`${styles.project} ${styles.project2}`}>
                    {/* <button className={styles.projectButton}>View Project</button>
                    <button className={styles.codeButton}>View Code</button> */}
                    <Button className={styles.projectButton}>View Project</Button>
                    <Button className={styles.codeButton}>View Code</Button>
                </span>
                {/* <img className={styles.project} src={softSearch} alt="#" /> */}
                {/* <img className={styles.project} src={airAware} alt="#" /> */}
            </div>
        </div>
    );
}
 
export default Projects;