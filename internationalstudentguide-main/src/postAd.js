// import App from './App';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function postAd() {
  return (
    <div>
      <h2>Post your Ad!</h2>
      <div> &nbsp;</div>

      <Form /* action="signup.php" */ >
        
        <FormGroup row>
            <Label for="title" sm={2}>Title</Label>
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
            <Label for="description" sm={2}>Description</Label>
            <Col sm={10}>
                <Input type="textarea" name="description" id="description" placeholder="Enter description of your ad!" required />
            </Col>
        </FormGroup>

        <FormGroup row>
            <Label for="email" sm={2}>Email</Label>
            <Col sm={10}>
                <Input type="email" name="email" id="email" placeholder="Enter your email to contact" />
            </Col>
        </FormGroup>

        <FormGroup row>
            <Label for="email" sm={2}>Phone Number</Label>
            <Col sm={10}>
                <Input type="phone" name="phone" id="phone" placeholder="Enter your phone number to contact" />
            </Col>
        </FormGroup>

        <Button type="submit" ><b>Post</b></Button>
        
              
              {/* <p>Forgot Password? <a href="./" >Click Here!</a></p> */}
              {/* <p>Don't have an account? <a href="./" >Sign Up Here!</a></p> */}
            
            
          </Form>
    </div>
  );
}


export default postAd;