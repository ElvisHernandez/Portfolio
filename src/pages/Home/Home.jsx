import React, { useState ,useEffect, useRef } from 'react';
import styles from './Home.module.css'

const Home = () => {
    // const homeRef = useRef(null)

    useEffect(() => {
        // if(!homeRef.current) return

        const appScript = document.createElement('script')
        const particlesScript = document.createElement('script')
        appScript.src = './particles.js'
        particlesScript.src = './app.js'
        appScript.async = true
        particlesScript.async = true

        document.body.appendChild(appScript)
        document.body.appendChild(particlesScript)

        return () => {
            document.body.removeChild(appScript)
            document.body.removeChild(particlesScript)
        }
    },[])

    return (
        <>
            {/* <div id='home'> */}
                <h1>Hi there, my name is Elvis Hernandez and I'm a Full-Stack Web Developer.</h1> 
                {/* <section className={styles.home} id="particles-js" />         */}
            {/* </div> */}
            {/* {homeRef.current = document.getElementById('home')}
            {console.log(document.getElementById('home'))} */}
        </>
    );
}
 
export default Home;
