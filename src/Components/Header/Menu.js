import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom'; 

export default function Menu() {
    return (
        
        <React.Fragment>

                <NavLink className={classes.E_Nav} to="/">Home</NavLink>
                <NavLink className={classes.E_Nav} to="/about">About</NavLink>
                <NavLink className={classes.E_Nav} to="/works">Works</NavLink>
                <NavLink className={classes.E_Nav} to="/contact">Contact</NavLink>
                
                

        </React.Fragment>
        
    )
}


