import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Redirect, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap';

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} />
      {/* <Redirect from="/" to="/home" /> */}
    </Switch>
  </BrowserRouter>
);


// ReactDOM.render( <App />, document.getElementById('root'));
ReactDOM.render(routes, document.getElementById("root"));

reportWebVitals();
