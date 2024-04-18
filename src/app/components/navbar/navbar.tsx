/* eslint-disable @next/next/no-html-link-for-pages */
"use client"
import { useState } from "react";
import styles from './navbar.module.css'


export default function Navbar() {
    // adding the states 
    const [isActive, setIsActive] = useState(false);
    //add the active class
    const toggleActiveClass = () => {
      setIsActive(!isActive);
    };
    //clean up function to remove the active class
    const removeActive = () => {
      setIsActive(false)
    }
    return (
      <div className="App">
        <header className="App-header">
          <nav className={`${styles.navbar}`}>
            {/* logo */}
            <a href='/' className={`${styles.logo}`}>EVDekho. </a>
            <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
              <li onClick={removeActive}>
                <a href='/' className={`${styles.navLink}`}>Home</a>
              </li>
              <li onClick={removeActive}>
                <a href='/electricscooter/ather450s' className={`${styles.navLink}`}>Ather 450s</a>
              </li>
              <li onClick={removeActive}>
                <a href='/electricscooter/ather/ather450x' className={`${styles.navLink}`}>Ather 450x</a>
              </li>
              <li onClick={removeActive}>
                <a href='/electricscooter/ather/atherapex' className={`${styles.navLink}`}>Ather Apex</a>
              </li>
            </ul>
            <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
            </div>
          </nav>
        </header>
      </div>
    );
  }
  