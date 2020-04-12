import React from 'react';
import styles from './Skills.module.css'
import { nodePNG, programmingPNG, javascriptPNG } from '../../assets'

const Skills = () => {
    return (
        <div className={styles.body}>
            <img style={{background: 'green !important'}} src={javascriptPNG} alt=""/>
            {/* <h1 className={styles.heading}>Skills</h1> */}
            <div className={styles.skillsIntro}>Blah</div>
            <div className={styles.skills}></div>
        </div>
    );
}
 
export default Skills;