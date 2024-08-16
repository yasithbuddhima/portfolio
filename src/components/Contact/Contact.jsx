// 
import React from "react";
import styles from './Contact.module.css';  

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import RoomIcon from '@mui/icons-material/Room';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Contact(){
    

    return(
        <div id="contact" className={styles.maindivision}>
            <div className={styles.card}>
                <div className={styles.contact}>
                    <h1 className={styles.header}>Contact me</h1>
                    <div className={styles.info}>
                        <p> <a href="mailto:yasithbuddhima@gmail.com">yasithbuddhima@gmail.com</a></p>
                        <div className={styles.icon}><AlternateEmailIcon/></div>
                        <p>+94 776143717 </p>
                        <div className={styles.icon}><LocalPhoneIcon/></div>
                        <p>No:112,Kusal Kanda,Batapola,Sri Lanka</p>
                        <div className={styles.icon}><RoomIcon/></div>
                    </div>
                </div>
                <div className={styles.socials}>
                    <a href="mailto:yasithbuddhima@gmail.com"><div className={styles.mail}><p>SEND MESSAGE </p><div ><ForwardToInboxIcon/></div></div></a>
                    <div className={styles.links}>
                        <a href="https://www.linkedin.com/in/yasithbuddhima" target="_blank" rel="noopener noreferrer">
                            <div className={styles.icon}><LinkedInIcon/></div>
                        </a>
                        <a href="https://github.com/yasithbuddhima" target="_blank" rel="noopener noreferrer">
                            <div className={styles.icon}><GitHubIcon/></div>
                        </a>
                        <a href="https://www.instagram.com/yasith_buddhima" target="_blank" rel="noopener noreferrer">
                            <div className={styles.icon}><InstagramIcon/></div>
                        </a>
                        <a href="https://facebook.com/yasith.buddhima.3" target="_blank" rel="noopener noreferrer">
                            <div className={styles.icon}><FacebookIcon/></div>
                        </a>
                        
                        <a href="https://wa.me/776143717" target="_blank" rel="noopener noreferrer">
                            <div className={styles.icon}><WhatsAppIcon/></div>
                        </a>
                        
                    </div>
                    
                </div>
            </div> 
            <footer>yasith buddhima © {(new Date().getFullYear()) } </footer>
        </div>
    )
}

export default Contact;