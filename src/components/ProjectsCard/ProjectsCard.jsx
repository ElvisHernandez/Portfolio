import React from 'react';
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import styles from './ProjectsCard.module.css'

const GlobalCSS = withStyles({
    "@global": {
        ".MuiButton-root": {
            display: 'none',
            background: '#228B22',
            color: 'whitesmoke',
        },
        ".MuiButton-root:hover": {
            background: 'whitesmoke',
        }
    }
})(() => null)


const ProjectsCard = () => {
    return (
        <div className={styles.projectContainer}>
            <GlobalCSS />
            <p className={styles.project1Text}>Soft Search is a career search web 
            application <br /> specifically created for Software Development.</p>
            <div>
                <Button>
                    <a href="https://s0ft-search.herokuapp.com/" target="_blank">
                        View Project
                    </a>
                </Button>
                <Button>
                    <a href="https://github.com/ElvisHernandez/SoftSearch" target="_blank">
                        View Code
                    </a>
                </Button>
            </div>
        </div>
    );
}
 
export default ProjectsCard;