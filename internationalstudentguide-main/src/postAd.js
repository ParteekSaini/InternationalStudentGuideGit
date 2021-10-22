// import App from './App';
import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function postAd() {
  return (
    
      

      <Form /* action="signup.php" */ >
        <h2>Post your Ad!</h2>
      <div> &nbsp;</div>
        <FormGroup row>
            <Label for="title" sm={2}>Title*</Label>
            <Col sm={10}>
                <Input type="text" name="title" id="title" placeholder="Enter Title of your ad!" required />
            </Col>
        </FormGroup>

        <FormGroup row>
            <Label for="subtitle" sm={2}>Subtitle</Label>
            <Col sm={10}>
                <Input type="text" name="subtitle" id="subtitle" placeholder="Enter Subtitle of your ad(if any)!" />
            </Col>
        </FormGroup>

        <FormGroup row>
            <Label for="description" sm={2}>Description*</Label>
            <Col sm={10}>
                <Input type="text" name="description" id="description" placeholder="Enter description of your ad!" required />
            </Col>
        </FormGroup>

        <FormGroup row>
            <Label for="email" sm={2}>Email*</Label>
            <Col sm={10}>
                <Input type="text" name="email" id="email" placeholder="Enter your email" required />
            </Col>
        </FormGroup>

        <FormGroup row>
            <Label for="email" sm={2}>Phone Number*</Label>
            <Col sm={10}>
                <Input type="text" name="phone" id="phone" placeholder="Enter your phone number" required />
            </Col>
        </FormGroup>

        <FormGroup row>
            <Label for="exampleFile" sm={2}>File</Label>
            <Col sm={10}>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                    {/* This is some placeholder block-level help text for the above input. */}
                    {/* It's a bit lighter and easily wraps to a new line. */}
                </FormText>
            </Col>
        </FormGroup>
        <br />

        <Button type="submit" ><b>Post</b></Button>
        
              
              {/* <p>Forgot Password? <a href="./" >Click Here!</a></p> */}
              {/* <p>Don't have an account? <a href="./" >Sign Up Here!</a></p> */}
            
            
          </Form>
    
  );
}


export default postAd;