import React from 'react';
import Container from '@material-ui/core/Container';
import {Work} from "../../WorksConatiner";
import Grid from "@material-ui/core/Grid";
import classes from "./Works.module.css";

export default function Works() {

  return (
    <Container style={{marginTop: "50px"}} maxWidth="lg">
      <Grid className="animate" container spacing={3}>
        {Work.map((name, index) => {
          return (

            <Grid key={index} item xs={6} sm={3}>
               <a target="_blank" rel="noopener noreferrer" href={name.img}>
              <div className={classes.e_box}>
                <img src={name.thumb} alt="Img"/>
                <h5 className={classes.toogle_title}>{name.title}</h5>
               
              </div>
              </a>
            </Grid>

          );
        })
}
      </Grid>
    </Container>
  )
}
