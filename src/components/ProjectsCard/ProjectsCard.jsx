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
            width: '8rem'
        },
        ".MuiButton-root:hover": {
            background: 'whitesmoke',
        }
    }
})(() => null)


const ProjectsCard = ({ image, description, projectLink, codeLink }) => {
    const backgroundImage = {
        "backgroundImage": `url(${image})`
    }

    return (
        <div className={styles.projectContainer} style={backgroundImage}>
            <GlobalCSS />
            <p className={styles.projectText}>{description}</p>
            <div>
                <Button>
                    <a href={projectLink} target="_blank">
                        View Project
                    </a>
                </Button>
                <Button>
                    <a href={codeLink} target="_blank">
                        View Code
                    </a>
                </Button>
            </div>
        </div>
    );
}
 
export default ProjectsCard;