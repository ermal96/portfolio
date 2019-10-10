import React from 'react'
import classes from './Header.module.css';
import Logo from "./Logo";
import Menu from "./Menu";
import Social from "./Social";
import Container from '@material-ui/core/Container';

export default function Header() {
  return (
    <nav>
      <Container className="animate" maxWidth="lg">
        <div className={classes.Header}>
          <div className={classes.Logo_Container}><Logo/></div>
          <div className={classes.Menu_Container}><Menu/></div>
          <div className={classes.Social_Container}><Social/></div>
        </div>
      </Container>
    </nav>

  )
}
