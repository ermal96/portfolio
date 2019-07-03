import React from 'react'
import Banner_ from "../../Assets/banner.svg";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


export default function Home() {
    return (

        <Container maxWidth="lg" >

            <Grid className="E_Big_container" container spacing={3}>

                <Grid item xs={12} sm={6}>
                   <h1>Designer,<br /> Front-end Developer</h1>
                   <h4>I design and code beautifully<br />
                    simple things, and I love what I do.</h4>
                    <button>Learn More</button>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <img style={{width:"100%"}} src={Banner_}  alt="Banner" />
                </Grid>

            </Grid>
              
        </Container>
 
       
    )
}


