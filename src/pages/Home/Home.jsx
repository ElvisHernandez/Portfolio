import React, { useEffect } from 'react';
import styles from './Home.module.css'


const Home = () => {

    useEffect(() => {
        window.onload = () => {
            const currentViewWidth = window.innerWidth
            const widthRange = viewWidthRange(currentViewWidth)

            const forceRadius = viewportToForceRadius(currentViewWidth)
            startAnimation(forceRadius)
        }
    },[])

    function startAnimation(forceRadius) {
        const animationInitializer = document.createElement('script')
        animationInitializer.src = './app.js'
        animationInitializer.id = 'animationInitializer'
        animationInitializer.center = forceRadius
        animationInitializer.particles = numberOfParticles(window.innerWidth)
        animationInitializer.async = true
        document.body.appendChild(animationInitializer) 
    }

    function viewportToForceRadius(viewport) {
        if (viewport > 900) return 350
        else if (viewport > 600) return 250
        else return 100 
    }

    function viewWidthRange(width) {
        if (width > 900) return 'lg' 
        else if (width > 600) return 'md' 
        else return 'sm'
    }

    function numberOfParticles(viewportWidth) {
        if (viewportWidth > 900) return 160
        else if (viewportWidth > 600) return 130
        else return 60
    }

    return (
        <>                
            <section id='particles-js' className={styles.particlesJs}><span className={styles.intro}> Hi 
            there, I'm <span className={styles.name} >Elvis</span> and I'm a <br/>Full-Stack Web Developer.</span></section>
        </>
    );
}
 
export default Home;
