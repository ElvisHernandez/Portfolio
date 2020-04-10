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
            // const canvas = document.querySelector('canvas')
            // console.log(canvas.center)
            const script = document.createElement('script')
            script.src = './app.js'
            script.id = 'randoScript'
            script.randomAttribute = 'this is my random attribute'
            script.async = true
            document.body.appendChild(script)
        }
        return () => {
            // window.removeEventListener('resize', callback)
        }
    },[])



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
