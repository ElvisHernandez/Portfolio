import React from 'react';
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import styles from './ProjectsCard.module.css'

const GlobalCSS = withStyles({
    "@global": {
        ".MuiButton-root": {
            // display: 'none',
            background: '#228B22',
            color: 'whitesmoke',
            marginBottom: '3rem',
        },
        ".MuiButton-root:hover": {
            background: 'whitesmoke',
            color: '#228B22',
        }
    }
})(() => null)


const ProjectsCard = () => {
    return (
        <div className={styles.projectContainer}>
            <GlobalCSS />
            <p className={styles.project1Text}>Soft Search is a career search web 
            application specifically created for Software Development.</p>
            <div className={styles.buttons}>
                <Button className={styles.projectButton}>View Project</Button>
                <Button className={styles.codeButton}>View Code</Button>
            </div>
        </div>
    );
}
 
export default ProjectsCard;