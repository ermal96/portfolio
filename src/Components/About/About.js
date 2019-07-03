import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import About_ from "../../Assets/about.svg";
export default function About() {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={3} className="E_Big_container">

                <Grid item xs={12} sm={6}>
                <h4>Hello !</h4>
                <h1>i'm Ermal Vrapi</h1>
                <h5>Experienced Web Designer and Front End Developer <br />
                    Skilled in PSD to Wordpress, User Experience (UX),<br />
                    Logo Design, WordPress, React Js. <br />
                </h5>
                <button className="Btn_Secondary">Download CV</button>
                </Grid>

                <Grid item xs={12} sm={6}>
                   <img style={{width:"100%"}} src={About_}  alt="About" />
                </Grid>

                </Grid>
        </Container>
    )
}
