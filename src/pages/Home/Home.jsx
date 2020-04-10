import React, { useEffect } from 'react';
import styles from './Home.module.css'


const Home = () => {

    useEffect(() => {
        const particleScript = document.createElement('script')
        particleScript.src = './particles.js'
        particleScript.async = true

        document.body.appendChild(particleScript)
        // window.addEventListener('resize',callback)

        window.onload = () => {
            const forceRadius = viewportToForceRadius()
            setForceRadius(forceRadius)
        }
        return () => {
            // window.removeEventListener('resize', callback)
        }
    },[])

    function setForceRadius(forceRadius) {
        let animationInitializer = document.getElementById('animationInitializer')
        if (animationInitializer) {
            animationInitializer.center = forceRadius
        } else {
            animationInitializer = document.createElement('script')
            animationInitializer.src = './app.js'
            animationInitializer.id = 'animationInitializer'
            animationInitializer.center = forceRadius
            animationInitializer.async = true
            document.body.appendChild(animationInitializer)
        }
    }

    function viewportToForceRadius() {
        const viewport = window.innerWidth

        if (viewport > 900) return 350
        else if (viewport > 600) return 250
        else return 160 
    }


    function callback() {
        const canvas = document.querySelector('canvas')
        console.log(canvas.center)
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
