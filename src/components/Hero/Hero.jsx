import React from "react";
import styles from './Hero.module.css'

function Hero(){
    return(
        <div id="hero" className={styles.maindivision}>
            <div className={styles.divisionText}><h1>I'm Yasith</h1><h4>Front-end Developer</h4></div>
            <div className={styles.divisionImg}><img className={styles.img} src='img/hero.jpg' alt="heroImage" /></div>
            
        </div>
    )
}

export default Hero;