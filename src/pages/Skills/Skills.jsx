import React from 'react';
import styles from './Skills.module.css'
import { nodePNG, programmingPNG, javascriptPNG, elvis, reactPNG } from '../../assets'
import { SkillsCard } from '../../components'

const frontEndDescription = `My favorite part about the 
front-end is being able to start with a blank canvas and 
watching it evolve into the result of your imagination.`

const frontEndSkills = ['HTML5','CSS3','React','JavaScript','Bootstrap4','Material UI']

const Skills = () => {
    return (
        <div className={styles.body}>
            {/* <img style={{borderRadius:'50%', height:'auto', width: 'auto'}} src={elvis} alt=""/> */}
            {/* <div className={styles.image}></div> */} 
            <h1 className={styles.heading}>Skills</h1>
            <SkillsCard imgURL={reactPNG} 
                title="Front-End Skills" 
                description={frontEndDescription}
                frontEndSkills={frontEndSkills} 
            />
            <div className={styles.skillsIntro}>Blah</div>
            <div className={styles.skills}></div>
        </div>
    );
}
 
export default Skills;