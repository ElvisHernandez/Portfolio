import React, { useState ,useEffect } from 'react';
import styles from './Home.module.css'

const Home = () => {
    const [canvas, setCanvas] = useState([])

    useEffect(() => {
        // console.log('this is my console.log',document.getElementById('particles-js'))
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

    // useEffect(() => {
    //     if (!canvas.length) return
    //     console.log(canvas)
    // },[canvas])

    const addIntro = () => {
        const myCanvas = document.getElementsByClassName("particles-js-canvas-el")
        console.log(myCanvas)
        // console.log(myCanvas[0])
    
        // const myCanvas = Array.from(document.getElementsByClassName("particles-js-canvas-el"))
        // console.log(myCanvas)
        // console.log(myCanvas[0])
    }

    return (
        <>                
            <h1 className='something'>Hi there, my name is Elvis Hernandez and I'm a Full-Stack Web Developer.</h1> 
            <section id='particles-js' className={styles.particlesJs}>dsfsdfsd</section>
            {addIntro()}
        </>
    );
}
 
export default Home;
