import React from 'react'
import Home_ from "../../Assets/home.svg";
import Reading_ from "../../Assets/reading.svg";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {NavLink} from 'react-router-dom';

export default function Home() {
  return (

    <Container className="animate" maxWidth="lg">

      <Grid className="e_big_container" container spacing={3}>

        <Grid item xs={12} sm={6}>
          <h1>Designer,<br/>
            frontEnd Developer</h1>
          <h4>I design and code beautifully<br/>
            simple things, and I love what I do.</h4>
          <button>
            <NavLink to="/about">Learn More
              <img className="btn_img" alt="Learn More" src={Reading_}/></NavLink >
          </button>
        </Grid>

        <Grid item xs={12} sm={6}>
          <img style={{
            width: "100%"
          }} src={Home_} alt="Banner"/>
        </Grid>

      </Grid>

    </Container>

  )
}
