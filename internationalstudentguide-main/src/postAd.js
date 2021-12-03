// import App from './App';
import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import { Component } from 'react';
import { FormControl } from 'react-bootstrap';

class PostAd extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            subtitle:"",
            description:"",
            email:"",
            phone:"",
            adForm:[]
        };
        // this.flipContent = this.flipContent.bind(this);
      }

      async componentDidMount(){    
        const {data} =   await axios.get("/api/postAd");
        // const {data} = await promise;
        console.log(data);
        this.setState({adForm:data});
      }

      handleChange = (e) =>{
        let inputData= e.target.className;
        if(inputData === "title"){
            this.setState ({ title: e.target.value});
        }
        else if(inputData === "subtitle"){
            this.setState ({ subtitle: e.target.value});
        }
        else if(inputData === "description"){
            this.setState({ description:e.target.value});
        }
        else if(inputData === "email"){
            this.setState({ email:e.target.value});
        }
        else if(inputData === "phone"){
            this.setState({ phone:e.target.value});
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        // var isDuplicateEmail = false;
        // this.state.adForm.forEach(element => {
        //       if(element.email===this.state.email){
        //         isDuplicateEmail= true;
        //       }
        // });
  
        // if(isDuplicateEmail==false){
        //   if(this.state.password===this.state.repeatPassword){
            const obj = { title: this.state.title, 
                            subtitle: this.state.subtitle, 
                            description: this.state.description, 
                            email: this.state.email, 
                            phone: this.state.phone };
            const { data } = await axios.post('/api/postAd', obj);
            console.log("Hello");
            console.log(obj.title);
        //   }
        //   else{
        //     alert("Please match your password")
        //   }
        // }
        // else{
        //   alert("This email is already been registered");
        // }
        
        <a href="/login" ></a>
  }
    
      render(){
          return(

          

      <Form /* action="signup.php" */ >
        <h2>Post your Ad!</h2>
      <div> &nbsp;</div>

      <label for="title"><b>Title</b></label>
              <input className="title" type="text" placeholder="Enter title" name="title" value={this.state.title} onChange={this.handleChange} required />

              <label for="subtitle"><b>Subtitle</b></label>
              <input className="subtitle" type="text" placeholder="Enter subtitle" name="subtitle" value={this.state.subtitle} onChange={this.handleChange} required />

              <label for="description"><b>Description</b></label>
              <input className="description" type="text" placeholder="Enter description" name="description" value={this.state.description} onChange={this.handleChange} required />
              
              <label for="email"><b>Email</b></label>
              <input className="email" type="text" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleChange} required />

              

              <label for="phone"><b>phone</b></label>
              <input className="phone" type="text" placeholder="Enter phone" name="phone" value={this.state.phone} onChange={this.handleChange} required />
        {/* <FormGroup row>
            <Label for="title" sm={2}>Title*</Label>
            <Col sm={10}>
                <Input className="title" type="text" name="title" id="title" placeholder="Enter Title of your ad!" value={this.state.title} required onChange={this.handleChange} />
            </Col>
        </FormGroup>

        <label for="name"><b>Name</b></label>
              <input  type="text" placeholder="Enter Name" name="name" value={this.state.title} onChange={this.handleChange} required />

        <FormGroup row>
            <Label for="subtitle" sm={2}>Subtitle</Label>
            <Col sm={10}>
                <Input className="subtitle" type="text" name="subtitle" id="subtitle" placeholder="Enter Subtitle of your ad(if any)!" value={this.state.subtitle} onChange={this.handleChange}  />
            </Col>
        </FormGroup>

        <FormGroup row>
            <Label for="description" sm={2}>Description*</Label>
            <Col sm={10}>
                <Input className="description" type="text" name="description" id="description" placeholder="Enter description of your ad!" value={this.state.description} required  onChange={this.handleChange} />
            </Col>
        </FormGroup>

        <FormGroup row>
            <Label for="email" sm={2}>Email*</Label>
            <Col sm={10}>
            <FormControl className="email" id="email" name="email" type="email"  value={this.state.email} onChange={this.handleChange}></FormControl>
            </Col>
        </FormGroup>

        <FormGroup row>
            <Label for="phone" sm={2}>Phone Number*</Label>
            <Col sm={10}>
                <Input className="phone" type="text" name="phone" id="phone" placeholder="Enter your phone number" value={this.state.phone} required onChange={this.handleChange}  />
            </Col>
        </FormGroup> */}

<label for="exampleFile"><b>File</b></label>
<input type="file" name="file" id="exampleFile" />
<br />
<button  type="submit" href="./socialhub" onClick={(e)=>{this.handleSubmit(e)}}><b>Post</b></button>
        {/* <FormGroup row>
            <Label for="exampleFile" sm={2}>File</Label>
            <Col sm={10}>
                
                <FormText color="muted"> */}
                    {/* This is some placeholder block-level help text for the above input. */}
                    {/* It's a bit lighter and easily wraps to a new line. */}
                {/* </FormText>
            </Col>
        </FormGroup> */}
        

        {/* <Button type="submit" ><b>Post</b></Button> */}
        {/* <Button  type="submit" href="./socialhub" onClick={(e)=>{this.handleSubmit(e)}}><b>Post</b></Button> */}
              
              {/* <p>Forgot Password? <a href="./" >Click Here!</a></p> */}
              {/* <p>Don't have an account? <a href="./" >Sign Up Here!</a></p> */}
            
            
          </Form>
    );
}
  
}


export default PostAd;