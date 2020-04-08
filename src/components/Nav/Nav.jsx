import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

const Nav = () => {
    return(
        <nav>
            <ul className={styles.navbar}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
            </ul>
        </nav>
    )
}

export default Nav