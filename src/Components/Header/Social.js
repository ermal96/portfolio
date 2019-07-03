import React from 'react';
import Github_ from "../../Assets/github.svg";
import Linkedin_ from "../../Assets/linkedin.svg";
import Email_ from "../../Assets/email.svg";
import classes from './Header.module.css';

export default function Social() {
    return (
        <React.Fragment>
         <a href="https://github.com/ermal96" target="_blank" rel="noopener noreferrer"> <img src={Github_}   alt="Github Logo"   /></a>
         <a className={classes.Social_Container_img} href="https://www.linkedin.com/in/ermal-vrapi-1a36a9167/" target="_blank" rel="noopener noreferrer"> <img src={Linkedin_} alt="Linkedin Logo" /></a>
         <a className={classes.Social_Container_img} href="mailto:ermalvrapi18@gmail.com"> <img src={Email_} alt="Linkedin Logo" /></a>
        </React.Fragment>
    )
}
