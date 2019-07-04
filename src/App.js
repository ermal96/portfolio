import React from 'react';
import {Header, Home, About, Works, Contact } from "./Components/index";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export default function App() {
  return (

    <BrowserRouter>

      <Header/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About}/>
        <Route path="/works" component={Works}/>
        <Route path="/contact" component={Contact}/>
      </Switch>

    </BrowserRouter>

  );
}
