import App from './App';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody, Row, Col } from 'reactstrap';


function socialHub() {
  return (
    <div>
      <h2>Social Hub</h2>
      
      <div style={{width:'100%'}}>We are here to help you!
        <div style={{float:'right', width:'20%'}}>
          <Button href="./postAd">Post your Ad!</Button>
        </div>
        <br /><br />
      </div>
      
      <CardDeck>
        <Row>
          <Col sm="4">
            <Card>
              <CardImg top width="100%" src="./images/BritishColumbia.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <CardImg top width="100%" src="./images/nova-scotia.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </CardDeck>
    </div>
  );
}

export default socialHub;