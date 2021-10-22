import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Hero from './components/Hero';
import Content from './components/Content';
import { FormControl } from 'react-bootstrap';

import axios from 'axios';

class Contact extends React.Component {
    state={
        contactData: []
    }
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            msg:'',
            disabled:'',
            dbSent:'false',
        }
    }
    handleChange= (e) =>{
        //console.log(e);
       
        const target= e.target;
        const value= target.value;
        const name= target.name;
        this.setState({
            [name]:value
        })     
        console.log(this.state.name);
    } 
    handleMsg = (e) => {
        const target= e. target;
        const msg= target.msg;
        this.setState({
            msg: target.value
        })
    }
    checkValidation(){
        let name = this.state.name;
        let email= this.state.email;
        let message= this.state.msg;
        let errors = {};
        let formIsValid = true;

        //Name
        if(name==""){
           alert("Please enter the name");
           formIsValid= false;
           return formIsValid;
        }
        else if(email==""){
            alert("Please enter the email");
           formIsValid= false;
           return formIsValid;
        }
        else if(message==""){
            alert("Please enter your message");
            formIsValid= false;
           return formIsValid;
        }
        else{
            formIsValid= true;
           return formIsValid;
        }
       
        }
        handleSubmit = async (e) => {
        e.preventDefault();

        if(this.checkValidation()){
            this.setState({
                disabled : true,
                dbSent : true
            })
            console.log("In axios contact");
            const obj = { full_name: this.state.name, email: this.state.email, message: this.state.msg };
            console.log(obj);
            const { data } = await axios.post('/contact', obj);
            console.log("in axios contact after")
           // const contact = data.ops[0];
          
          
        }

      }
        
    render(){
        return(
            <div>
                {/* <Hero title={this.props.title}/> */}
                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            {/* <Form.Label htmlFor="last-name">Last Name</Form.Label> */}
                            <FormControl id="full-name"  name="name" type="text"  value={this.state.name} onChange={this.handleChange}></FormControl>
                            {/* <p style={{color: "red"}}>{this.state.errors["name"]}</p> */}
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <FormControl id="email" name="email" type="email"  value={this.state.email} onChange={this.handleChange}></FormControl>
                            {/* <p style={{color: "red"}}>{this.state.errors["email"]}</p> */}
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <FormControl id="message" name="message" as="textarea" row="4" value={this.state.message} onChange={this.handleMsg}></FormControl>
                            {/* <p style={{color: "red"}}>{this.state.errors["message"]}</p> */}
                        </Form.Group>

                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Submit
                        </Button>

                        {this.state.dbSent === true && <p className="d-inline success-msg">Saved data to database</p>}
                        
                        {this.state.dbSent === false && <p className="d-inline err-msg">Couldn't save data to database</p>}
                    </Form>
                </Content>
            </div>
        );
    } 
}
export default Contact;
