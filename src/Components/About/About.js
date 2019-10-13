import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import About_ from "../../Assets/about.svg"
import CV_ from "../../Assets/cv.pdf"
import {IoIosDownload} from 'react-icons/io'
export default function About() {
  return (
    <Container className="animate" maxWidth="lg">
      <Grid container spacing={3} className="e_big_container">

        <Grid item xs={12} sm={6}>
          <h4>Hello !</h4>
          <h1>i'm Ermal Vrapi
          </h1>
          <h5>Experienced Web Designer, Front End Developer
            <br/>
            Skilled in PSD to Wordpress, User Experience (UX),<br/>
            Logo Design, WordPress, React Js,  etc.
            <br/>
          </h5>
          <button className="btn_secondary">
            <a href={CV_} rel="noopener noreferrer" target="_blank">Download CV&nbsp;<IoIosDownload /></a>
          </button>
        </Grid>

        <Grid item xs={12} sm={6}>
          <img style={{
            width: "100%"
          }} src={About_} alt="About"/>
        </Grid>

      </Grid>
    </Container>
  )
}
