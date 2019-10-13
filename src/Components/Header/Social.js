import React from 'react'
import classes from './Header.module.css'
import {IoLogoLinkedin, IoLogoGithub, IoIosMail} from 'react-icons/io'
export default function Social() {
  return (
    <React.Fragment>
      <a
      className={classes.Social_Container_img}
       href="https://github.com/ermal96" target="_blank" rel="noopener noreferrer">
        <IoLogoGithub/></a>
      <a
        className={classes.Social_Container_img}
        href="https://www.linkedin.com/in/ermal-vrapi-1a36a9167/"
        target="_blank"
        rel="noopener noreferrer">
        <IoLogoLinkedin/></a>
      <a
        className={classes.Social_Container_img}
        href="mailto:ermalvrapi18@gmail.com">
        <IoIosMail/></a>
    </React.Fragment>
  )
}
