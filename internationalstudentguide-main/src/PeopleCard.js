import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody, Row, Col,CardBlock } from 'reactstrap';

class PeopleCard extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    let { id, title, subtitle, description,email,phone } = this.props.person;
    return (
      <div>
        <Card>
               <CardImg top width="100%" src="./images/nova-scotia.jpg" alt="Card image cap" />
               <CardBody>
                 <CardTitle tag="h5">{title}</CardTitle>
                 <CardSubtitle tag="h6" className="mb-2 text-muted">{subtitle}</CardSubtitle>
                 <CardText>{description}</CardText>
                 <CardText>{email}</CardText>
                 <CardText>{phone}</CardText>
               </CardBody>
             </Card>
      </div>
    )
  }
  
}

export default PeopleCard;