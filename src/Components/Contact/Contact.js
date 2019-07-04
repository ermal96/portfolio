import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {
  Facebook_,
  Linkedin_,
  Email_,
  Instagram_,
  Phone_,
  Location_,
  Contact_
} from "../../Assets/index";

import classes from './Contact.module.css';

export default function Contact() {
  return (
    <Container className="animate" maxWidth="lg">
      <Grid container spacing={3} className="e_big_container">
        <Grid item xs={12} sm={6}>

          <h2>Contact Me !</h2>
          <div className={classes.contact_box}>
            <a href="tel:0699310392"><img src={Phone_} Email alt="Phone"/>
              <h4>0699310392</h4>
            </a>
          </div>
          <div className={classes.contact_box}>
            <a href="https://www.google.com/maps/place/Tirana"><img src={Location_} Email alt="Location"/>
              <h4>Tiranë</h4>
            </a>
          </div>
          <div className={classes.contact_box}>
            <a href="mailto:ermalvrapi18@gmail.com"><img src={Email_} Email alt="Email"/>
              <h4>Email</h4>
            </a>
          </div>
          <div className={classes.contact_box}>
            <a href="https://www.linkedin.com/in/ermal-vrapi-1a36a9167/"><img src={Linkedin_} Email alt="Linkedin"/>
              <h4>Linkedin</h4>
            </a>
          </div>
          <div className={classes.contact_box}>
            <a href="https://www.facebook.com/ermalvrapi"><img src={Facebook_} Email alt="Facebook"/>
              <h4>Facebook</h4>
            </a>
          </div>
          <div className={classes.contact_box}>
            <a href="https://www.instagram.com/ermalvrapi"><img src={Instagram_} Email alt="Instagram"/>
              <h4>Instagram</h4>
            </a>
          </div>

        </Grid>

        <Grid item xs={12} sm={6}>
          <img
            style={{
            width: "100%"
          }}
            src={Contact_}
            alt="contact"/>
        </Grid>
      </Grid>
    </Container>
  )
}
