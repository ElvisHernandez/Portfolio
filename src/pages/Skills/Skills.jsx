import React from 'react';
import styles from './Skills.module.css'
import { nodePNG, programmingPNG, javascriptPNG, elvis } from '../../assets'
import { MediaCard } from '../../components'

const Skills = () => {
    return (
        <div className={styles.body}>
            {/* <img style={{borderRadius:'50%', height:'auto', width: 'auto'}} src={elvis} alt=""/> */}
            {/* <div className={styles.image}></div> */} 
            <h1 className={styles.heading}>Skills</h1>
            <MediaCard />
            <div className={styles.skillsIntro}>Blah</div>
            <div className={styles.skills}></div>
        </div>
    );
}
 
export default Skills;