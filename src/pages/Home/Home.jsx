import React, { useEffect } from 'react';
import styles from './Home.module.css'

const Home = () => {

    useEffect(() => {
        const particleScript = document.createElement('script')
        particleScript.src = './particles.js'
        particleScript.async = true
        document.body.appendChild(particleScript)
        window.addEventListener('resize',callback)

        return () => {
            window.removeEventListener('resize', callback)
        }
    },[])

    function callback() {
        console.log('This is the supposed viewport width: ', window.innerWidth)
    }
    return (
        <>                
            <section id='particles-js' className={styles.particlesJs}><span className={styles.intro}> Hi 
            there, I'm <span className={styles.name} >Elvis</span> and I'm a <br/>Full-Stack Web Developer.</span></section>
        </>
    );
}
 
export default Home;
