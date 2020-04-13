import React from 'react';
import styles from './Skills.module.css'
import { nodePNG, programmingPNG, javascriptPNG, elvis, reactPNG } from '../../assets'
import { SkillsCard } from '../../components'
import * as SkillsConstants from '../../CONSTANTS/SkillsConstants'


const Skills = () => {
    return (
        <div className={styles.body}>
            {/* <img style={{borderRadius:'50%', height:'auto', width: 'auto'}} src={elvis} alt=""/> */}
            {/* <div className={styles.image}></div> */} 
            <h1 className={styles.heading}>Skills</h1>
            <SkillsCard imgURL={reactPNG} 
                title="Front-End Skills" 
                description={SkillsConstants.frontEndDescription}
                frontEndSkills={SkillsConstants.frontEndSkills} 
            />

            {/* <SkillsCard /> */}
            <div className={styles.skillsIntro}>Blah</div>
            <div className={styles.skills}></div>
        </div>
    );
}
 
export default Skills;