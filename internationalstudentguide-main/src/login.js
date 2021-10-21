import App from './App';

function logIn() {
  return (
    <div className="main_div">
      

      <div className="leftcontainer">
      <h2>  Welcome to International Student Guide!</h2>
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
              <h1>Login</h1>
              {/* <p>Welcome Back!</p> */}
              {/* <hr> */}
              
              <label for="email"><b>Email</b></label>
              <input type="text" placeholder="Enter Email" name="email" required />

              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required />

              {/* <p>By creating an account you agree to our <a href="#" >Terms  Privacy</a>.</p> */}

              <div class="clearfix">
              {/* <button type="button" class="cancelbtn">Cancel</button> */}
              <button type="submit" class="signupbtn"><b>Log In</b></button>
              {/* <div class="btnspace">&nbsp;</div> */}
                {/* <button type="button" class="loginbtn">Log in</button> */}
              </div>
              <p>Forgot Password? <a href="./" >Click Here!</a></p>
              <p>Don't have an account? <a href="./" >Sign Up Here!</a></p>
            </div>
          </form>


    </div>
  );
}


export default logIn;