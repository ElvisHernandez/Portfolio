import React, { useEffect } from 'react';
import styles from './Home.module.css'

const Home = () => {

    useEffect(() => {
        let animation = document.getElementById('particles-js')
        if(!animation) {
            animation = document.createElement('section')
            animation.id = 'particles-js'
            document.body.appendChild(animation)
        }
        console.log('this is my console.log',document.getElementById('particles-js'))
        const appScript = document.createElement('script')
        const particlesScript = document.createElement('script')
        appScript.src = './particles.js'
        particlesScript.src = './app.js'

        const animationContainer = document.getElementById('animation-container')
        animationContainer.appendChild(appScript)
        animationContainer.appendChild(particlesScript)

        return () => {
            // const animation = document.getElementById('particles-js')

            document.body.removeChild(animation)
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
