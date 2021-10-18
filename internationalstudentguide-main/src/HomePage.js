import App from './App';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router,Redirect, Switch, Route, Link } from "react-router-dom";
import signUp from './signup';
import logIn from './login';  
import axios from 'axios';
// import { transitions, positions, Provider as AlertProvider } from 'react-alert';
// import AlertTemplate from 'react-alert-template-basic';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formState: true,
        signupform: "/",
        loginform: "",
        name:"",
        email:"",
        password:"",
        repeatPassword:"",
        userDetails:[]
    };
    this.flipContent = this.flipContent.bind(this);
  }

    flipContent() {
  
      // this.setState({ formState: !formState })
      if (this.formState == true)
        { this.setState({ formState: false, signupform: "/", loginform: ""}); }
      else 
        { this.setState({ formState: true, signupform: "uuuuu", loginform: "/"}); }
    }

    async componentDidMount(){
        
      const {data} =   await axios.get("/api/userSignUp");
      //const {data} = await promise;
      console.log(data);
      this.setState({userDetails:data});
    
  
}

    handleChange = (e) =>{
      let inputData= e.target.className;
      if(inputData === "name"){
          this.setState ({ name: e.target.value});
      }
      else if(inputData === "email"){
          this.setState ({ email: e.target.value});
      }
      else if(inputData === "psw"){
          this.setState({ password:e.target.value});
      }else{
        this.setState({ repeatPassword:e.target.value});
      }
  }

  handleSubmit = async (e) => {
      e.preventDefault();
     
      var isDuplicateEmail = false;
      this.state.userDetails.forEach(element => {
            if(element.email===this.state.email){
              isDuplicateEmail= true;
            }
      });

      if(isDuplicateEmail==false){
        if(this.state.password===this.state.repeatPassword){
          const obj = { name: this.state.name, email: this.state.email, password: this.state.password };
          const { data } = await axios.post('/api/userSignUp', obj);
        }else{
          alert("Please match your password")
        }
      }else{
        alert("This email is already been registered");
      }
        
      
      
      
      
      <a href="/login" ></a>
    //  const  singleUserData = data.ops[0];
    //   console.log(singleUserData);
}

  render(){
    return (
      
      <div>
      
        <h2> &nbsp; Welcome to International Student Guide!</h2>
      
        {/* <div className="h1 bg-suceess text-white text-center p-2"> */}
          {/* { this.state.signupform } */}
          {/* hey {this.state.formState} h */}
        {/* </div> */}
        {/* <div className="text-center"> */}
          {/* <button className="btn btn-primary" onClick={this.flipContent}>
            Click Me
            </button> */}
          
        {/* </div> */}

        <div className="leftcontainer">
          <h4>Planning to study in Canada and don't know the process &#x1F622;</h4>
          <p>Don't worry! We got all the information you need to know 	&#128512;</p>
          <h3>Sign up and learn the process &rarr;</h3>
          <br />
          <h5>Daily Updates!</h5>
          <p> </p>
          <p>Do you know, International students’confidence in Canada growing due to successful COVID-19 vaccine program. <a href="https://www.immigration.ca/international-students-confidence-in-canada-growing-due-to-successful-covid-19-vaccine-program">Know more..</a></p>
          <p>Do you know, International students defer to January 2022 due to late process time to issue study permit, therefore, they are forced to study online. <a href="https://thepienews.com/news/canada-international-students-defer-to-january-2022/">Know more..</a></p>
          <p>Do you know, Visa extension in Canada for international students. <a href="https://www.studyinternational.com/news/visa-extension-in-canada/">Know more..</a></p>
          <p>Do you know, New Brunswick launches new immigration pilot for international graduates. <a href="https://www.cicnews.com/2021/09/new-brunswick-launches-new-immigration-pilot-for-international-graduates-0919058.html#gs.cqcp7m">Know more..</a></p>
          <p>Do you know, Spike in international student enrolment shows MUN's global appeal despite rise in tuition fees. <a href="https://www.cbc.ca/news/canada/newfoundland-labrador/international-enrolment-mun-2021-1.6176812">Know more..</a></p>
          <p>Do you know, Canada universities and colleges to accept Indian board results. <a href="https://timesofindia.indiatimes.com/city/lucknow/canada-universities-colleges-to-accept-indian-board-results/articleshow/86665877.cms">Know more..</a></p>
          {/* <p>Do you know, <a href="">Know more..</a></p> */}
        </div>
          <form className="containerForm"/* action="signup.php" */ >
            <div className="container">
            {/* <Router>
              <div>
                <ul className="">
                  <li><a href="/">Sign Up</a></li>
                  <li><a href="/">Login</a></li>
                </ul>
                  <hr />
                <Switch>
                  <Route exact path={"/"} component={signUp} />
                  <Route exact path={this.state.signupform} component={logIn} />
                </Switch>
              </div>
            </Router> */}
              <h1>Sign Up</h1>
              <p>Sign Up for Free and let us help you!</p>
              {/* <hr> */}

              <label for="name"><b>Name</b></label>
              <input className="name" type="text" placeholder="Enter Name" name="name" value={this.state.name} onChange={this.handleChange} required />
              
              <label for="email"><b>Email</b></label>
              <input className="email" type="text" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleChange} required />

              <label for="psw"><b>Password</b></label>
              <input className="psw" type="password" placeholder="Enter Password" name="psw" value={this.state.password} onChange={this.handleChange} required />

              <label for="psw-repeat"><b>Repeat Password</b></label>
              <input className="psw-repeat" type="password" placeholder="Repeat Password" name="psw-repeat" value={this.state.repeatPassword} onChange={this.handleChange} required />

              <p>By creating an account you agree to our <a href="#" >Terms  Privacy</a>.</p>

              <div class="clearfix">
              {/* <button type="button" class="cancelbtn">Cancel</button> */}
              <button type="submit" class="signupbtn" onClick={(e)=>{this.handleSubmit(e)}}><b>Sign Up</b></button>
              {/* <div class="btnspace">&nbsp;</div> */}
                {/* <button type="button" class="loginbtn">Log in</button> */}
              </div>
              <p>Already have an account? <a href="/login" >Login Here!</a></p>
              <p>Already have an account? <a href="/login" >Login Here!</a></p>
            </div>
          </form>
      
      </div>
      
    );
  }
}


export default HomePage;