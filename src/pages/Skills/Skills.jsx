import React from 'react';
import styles from './Skills.module.css'
import { 
    nodePNG, nodeJS, 
    javascriptPNG, elvis, 
    reactPNG, nodeServer,
    programmingPNG } 
from '../../assets'
import { SkillsCard } from '../../components'
import * as SkillsConstants from '../../CONSTANTS/SkillsConstants'


const Skills = () => {
    return (
        <div className={styles.body}>
            {/* <img style={{borderRadius:'50%', height:'auto', width: 'auto'}} src={elvis} alt=""/> */}
            {/* <div className={styles.image}></div> */} 
            <h1 className={styles.heading}>Skills</h1>
            <div className={styles.skillcards}>
                <SkillsCard 
                    imgURL={reactPNG} 
                    title="Front-End Skills" 
                    description={SkillsConstants.frontEndDescription}
                    skillsList={SkillsConstants.frontEndSkills} 
                />
                <SkillsCard 
                    imgURL={programmingPNG}
                    title="General Skills"
                    description={SkillsConstants.generalDescription}
                    skillsList={SkillsConstants.generalSkills}
                />
                <SkillsCard 
                    imgURL={nodeJS}
                    title="Back-End Skills"
                    description={SkillsConstants.backEndDescription}
                    skillsList={SkillsConstants.backEndSkills}
                />
            </div>

            {/* <SkillsCard /> */}
            <div className={styles.skillsIntro}>Blah</div>
            <div className={styles.skills}></div>
        </div>
    );
}
 
export default Skills;