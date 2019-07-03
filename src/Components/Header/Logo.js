import React from 'react';
import Logo_ from "../../Assets/logo.svg";
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom'; 
export default function Logo() {
    return (
        <React.Fragment>
             <NavLink to="/"><img className={classes.Logo}  src={Logo_} alt="lOGO"  /></NavLink>
        </React.Fragment>
    )
}
