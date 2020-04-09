import React from 'react'
import styles from './Nav.module.css'

const Nav = () => {
    return(
        <nav className={styles.nav}>
            <ul className={styles.navbar}>
                <li><a href="#">About</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
        </nav>
    )
}

export default Nav