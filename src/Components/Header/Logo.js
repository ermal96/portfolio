import React from 'react';
import Logo_ from "../../Assets/logo.svg";
import classes from './Header.module.css';
export default function Logo() {
    return (
        <React.Fragment>
             <img className={classes.Logo}  src={Logo_} alt="lOGO"  />
        </React.Fragment>
    )
}
