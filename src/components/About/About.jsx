// 
import React from "react";
import styles from "./About.module.css";

function About(){

    return(
        <div id="about" className={styles.maindivision}>
            <div className={styles.img}>
                <div className={styles.imgContainer}>
                    <img className={styles.minWidthImg} src="img/yasith.minwidth.jpg" alt="yasith buddhima"/>
                    <img className={styles.maxWidthImg} src="img/yasith.jpg" alt="yasith buddhima"/>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.name}>
                    <h1>I'm Yasith Buddhima </h1>
                    <h3>Front End Developer <br/>  </h3>
                    <h3 className={styles.place}> in  Galle, Sri Lanka</h3>
                </div>
                <div className={styles.about}>
                I’ve taken the initiative to dive into the world of Front-End Development, a field I’m eager to explore further. Through self-study, I’ve developed a strong interest in creating engaging and user-friendly web experiences. I’m excited about the opportunities ahead and committed to expanding my skills in this dynamic area of technology.
                </div>
            </div>
            
        </div>
    )
}

export default About;