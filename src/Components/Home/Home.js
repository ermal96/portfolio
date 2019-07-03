import React from 'react'
import Banner_ from "../../Assets/banner.svg";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom'; 
import classes from "./Home.module.css";



export default function Home() {
    return (

        <Container className="animate" maxWidth="lg" >

            <Grid className="E_Big_container" container spacing={3}>

                <Grid className={classes.col_top} item xs={12} sm={6}>
                   <h1>Designer,<br /> Front-end Developer</h1>
                   <h4>I design and code beautifully<br />
                    simple things, and I love what I do.</h4>
                    <button><NavLink  to="/about">Learn More</NavLink ></button>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <img style={{width:"100%"}} src={Banner_}  alt="Banner" />
                </Grid>

            </Grid>
              
        </Container>
 
       
    )
}


