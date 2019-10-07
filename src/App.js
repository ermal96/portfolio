import React from 'react';
import {
  Header,
  Home,
  About,
  Works,
  Contact,
  SingleWork
} from "./Components/index";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default function App() {
  return (
    <Router>

      <Header/>

      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About}/>
        <Route path="/works" component={Works} exact/>
        <Route path="/works/:slug" component={SingleWork}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
      
    </Router>

  );
}
