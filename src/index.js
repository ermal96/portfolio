import React from "react";
import ReactDOM from "react-dom";
import "./Styles/App.scss";
import "./Styles/Animate.css";
import App from "./App";
import ReactGA from "react-ga";
import * as serviceWorker from "./serviceWorker";

ReactGA.initialize("UA-119596004-2");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();
