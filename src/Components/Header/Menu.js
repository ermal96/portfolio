import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom'; 

export default function Menu() {
    return (
        
    <React.Fragment>

        <NavLink style={{paddingLeft: "0"}} activeStyle={{color:"#007bff"}} className={classes.E_Nav} to="/" exact >Home</NavLink>
        <NavLink activeStyle={{color:"#01c8da"}} className={classes.E_Nav} to="/about">About</NavLink>
        <NavLink activeStyle={{color:"#90c833"}} className={classes.E_Nav} to="/works">Works</NavLink>
        <NavLink activeStyle={{color:"#4e94f7"}} className={classes.E_Nav} to="/contact">Contact</NavLink>

    </React.Fragment>
        
    )
}


