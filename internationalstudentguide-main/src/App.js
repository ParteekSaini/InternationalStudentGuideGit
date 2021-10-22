import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router,Redirect, Switch, Route, Link } from "react-router-dom";
import HomePage from './HomePage';
import college from './college';
import visaInfo from './visainfo';
import socialHub from './socialhub';
import Page5 from './page5';
import logIn from './login';
import BritishColumbia from './BritishColumbia';
import Alberta from './Alberta';
import Ontario from './Ontario';
import Saskatchewan from './Saskatchewan';
import Quebec from './Quebec';
import Manitoba from './Manitoba';
import NovaScotia from './NovaScotia';
import postAd from './postAd';
import Contact from './Contact';


class App extends Component {
  render() {
  return (
    <Router>
      <div className="main_div">
        <ul className="headerUl">
          <li><a href="/">Home</a></li>
          <li><a href="/college">College</a></li>
          <li><a href="/visainfo">Visa Info</a></li>
          <li><a href="/socialhub">Social Hub</a></li>
          <li style={{float:"right",backgroundColor:"grey"}}><a href="/login">LogIn</a></li>
          <li style={{float:"right",backgroundColor:"grey"}}><a href="/">SignUp</a></li>
          <li><a href="/Contact">Contact Us</a></li>
          {/* <li><a href="/page5">Page 5</a></li> */}
        </ul>

        <hr />
        
        <Switch>
          {/* <Route exact path="/"><Home /></Route> */}
          <Route exact path={"/"} component={HomePage} />
          <Route path={"/college"} component={college} />
          <Route path={"/visainfo"} component={visaInfo} />
          <Route path={"/socialhub"} component={socialHub} />
          <Route path={"/page5"} component={Page5} />
          <Route path={"/BritishColumbia"} component={BritishColumbia} />
          <Route path={"/Alberta"} component={Alberta} />
          <Route path={"/Ontario"} component={Ontario} />
          <Route path={"/Saskatchewan"} component={Saskatchewan} />
          <Route path={"/Quebec"} component={Quebec} />
          <Route path={"/Manitoba"} component={Manitoba} />
          <Route path={"/NovaScotia"} component={NovaScotia} />
          <Route path={"/login"} component={logIn} />
          <Route path={"/postAd"} component={postAd} />
	        <Route path={"/contact"} component={Contact} />
        </Switch>

        <footer>
          <p>&copy; All rights reserved</p>
        </footer>
      </div>
    </Router>
  );
  }
}

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }


export default App;