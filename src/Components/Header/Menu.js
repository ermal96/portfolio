import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';

export default function Menu() {
  return (

    <React.Fragment>

      <NavLink
        style={{
        paddingLeft: "0"
      }}
        activeStyle={{
        color: "var(--primary-color)"
      }}
        className={classes.E_Nav}
        to="/"
        exact>Home</NavLink>
      <NavLink
        activeStyle={{
        color: "var(--primary-color)"
      }}
        className={classes.E_Nav}
        to="/about">About</NavLink>
      <NavLink
        activeStyle={{
        color: "var(--primary-color)"
      }}
        className={classes.E_Nav}
        to="/works">Works</NavLink>
      <NavLink
        activeStyle={{
        color: "var(--primary-color)"
      }}
        className={classes.E_Nav}
        to="/contact">Contact</NavLink>

    </React.Fragment>

  )
}
