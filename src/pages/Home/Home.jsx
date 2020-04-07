import React, { useEffect } from 'react';
import styles from './Home.module.css'

const Home = () => {

    useEffect(() => {
        const appScript = document.createElement('script')
        const particlesScript = document.createElement('script')
        appScript.src = './particles.js'
        particlesScript.src = './app.js'

        document.body.appendChild(appScript)
        document.body.appendChild(particlesScript)

        return () => {
            document.body.removeChild(appScript)
            document.body.removeChild(particlesScript)
        }
    },[])

    return (
        <>                
            <section id='particles-js' className={styles.particlesJs}><span className={styles.intro}>Hi 
            there, my name is Elvis Hernandez <br/> and I'm a Full-Stack Web Developer.</span></section>
        </>
    );
}
 
export default Home;
