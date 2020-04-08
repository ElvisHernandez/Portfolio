import React, { useEffect } from 'react';
import styles from './Home.module.css'

const Home = () => {

    useEffect(() => {
        const appScript = document.createElement('script')
        // const particlesScript = document.createElement('script')
        appScript.src = './particles.js'
        // particlesScript.src = './app.js'
        appScript.async = true

        document.body.appendChild(appScript)
        // setTimeout(() => {
            // document.body.appendChild(particlesScript)
        // },200)

        return () => {
            // document.body.removeChild(appScript)
            // document.body.removeChild(particlesScript)
        }
    },[])

    return (
        <>                
            <section id='particles-js' className={styles.particlesJs}><span className={styles.intro}>Hi 
            there, I'm Elvis and I'm a <br/>Full-Stack Web Developer.</span></section>
        </>
    );
}
 
export default Home;