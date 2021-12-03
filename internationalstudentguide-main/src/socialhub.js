import App from './App';
import { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody, Row, Col,CardBlock } from 'reactstrap';
import React from 'react';
// import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import PeopleCard from './PeopleCard';
import { FormControl } from 'react-bootstrap';

class socialhub extends Component{

  constructor(props) {
    super(props);
    this.state = {
      people:[]
    };
    // this.flipContent = this.flipContent.bind(this);
  }

  async componentDidMount(){
        
    const {data} =   await axios.get("/api/postAd");
    //const {data} = await promise;
    console.log(data);
    this.setState({people:data});
}

removePerson(id) {
  this.setState({ people: this.state.people.filter(person => person.id !== id)});
}

render () {

  let peopleCards = this.state.people.map(person => {
    return (
      <Col sm="4">
        <PeopleCard key={person.id} removePerson={this.removePerson.bind(this)} person={person} />
      </Col>
    )
  })
  return (
    <><div>
      <h2>Social Hub</h2>
      <div style={{width:'100%'}}>We are here to help you!</div>
      <div  style={{float:'right', width:'20%'}}>
      <Button href="./postAd">Post your Ad!</Button>
      </div>
      </div>
      <CardDeck fluid>
      <Row>
        {peopleCards}
      </Row>
    </CardDeck></>
  )
  
}
}

//   render(){
//   return (
    // <div>
    //   <h2>Social Hub</h2>
      
      // <div style={{width:'100%'}}>We are here to help you!
    //     <div style={{float:'right', width:'20%'}}>
    //       <Button href="./postAd">Post your Ad!</Button>
    //     </div>
    //     <br /><br />
    //   </div>
      
//       <CardDeck>
//         <Row>
//           {this.state.socialHubDetails.map((detail,index)=>{
//             <Col sm="4">
//             <Card>
//               <CardImg top width="100%" src="./images/BritishColumbia.jpg" alt="Card image cap" />
//               <CardBody>
//                 <CardTitle tag="h5">{detail.title}</CardTitle>
//                 <CardSubtitle tag="h6" className="mb-2 text-muted">{detail.subtitle}</CardSubtitle>
//                 <CardText>{detail.description}</CardText>
//                 <Button>Button</Button>
//               </CardBody>
//             </Card>
//           </Col>
//           })}
          
//           <Col sm="4">
//             <Card>
//               <CardImg top width="100%" src="./images/nova-scotia.jpg" alt="Card image cap" />
//               <CardBody>
//                 <CardTitle tag="h5">Card title</CardTitle>
//                 <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
//                 <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
//                 <Button>Button</Button>
//               </CardBody>
//             </Card>
//           </Col>
//           <Col sm="4">
//             <Card>
//               <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
//               <CardBody>
//                 <CardTitle tag="h5">Card title</CardTitle>
//                 <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
//                 <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
//                 <Button>Button</Button>
//               </CardBody>
//             </Card>
//           </Col>
//           <Col sm="4">
//             <Card>
//               <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
//               <CardBody>
//                 <CardTitle tag="h5">Card title</CardTitle>
//                 <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
//                 <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
//                 <Button>Button</Button>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </CardDeck>
//     </div>
//   );
// }
// }

export default socialhub;