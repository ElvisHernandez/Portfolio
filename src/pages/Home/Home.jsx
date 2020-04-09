import React, { useEffect } from 'react';
import styles from './Home.module.css'

const Home = () => {

    useEffect(() => {
        const particleScript = document.createElement('script')
        particleScript.src = './particles.js'
        particleScript.async = true
        document.body.appendChild(particleScript)
    },[])

    return (
        <>                
            <section id='particles-js' className={styles.particlesJs}><span className={styles.intro} 
            // style={{left:'300px', top:'300px'}}
            >Hi 
            there, I'm <span className={styles.name} >Elvis</span> and I'm a <br/>Full-Stack Web Developer.</span></section>
        </>
    );
}
 
export default Home;
