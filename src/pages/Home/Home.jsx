import React, { useEffect } from 'react';
import styles from './Home.module.css'

const Home = () => {

    useEffect(() => {
        console.log('this is my console.log',document.getElementById('particles-js'))
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
            <h1>Hi there, my name is Elvis Hernandez and I'm a Full-Stack Web Developer.</h1> 
            <section id='particles-js' className={styles.particlesJs}></section>
        </>
    );
}
 
export default Home;
