import React from 'react';
import styles from './Skills.module.css'
import { SkillsCard } from '../../components'
import { skillsJSON } from '../../CONSTANTS/SkillsConstants'

const Skills = () => {
    return (
        <div className={styles.body}>
            {/* <img style={{borderRadius:'50%', height:'auto', width: 'auto'}} src={elvis} alt=""/> */}
            {/* <div className={styles.image}></div> */} 
            <h1 className={styles.heading}>Skills</h1>
            <div className={styles.skillcards}>
                {skillsJSON.map(({ URL, title, description, skills}) => (
                    <SkillsCard 
                        imgURL={URL}
                        title={title}
                        description={description}
                        skillsList={skills}
                    />  
                ))}
            </div>
        </div>
    );
}
 
export default Skills;