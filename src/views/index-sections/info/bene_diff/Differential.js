import React from "react";
import {Container,
  Row,
  Col,
  Card,
  // CardBody,
  CardText,
  CardTitle,
  // CardHeader
} from "reactstrap";
function Differential() {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  return (
    <>
      <Container>
        <Row>
          <Col >
            <h1>Diferenciais</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={{size: 4, order: 0, offset: 0}}>
            <Card body outline color="danger">
              <CardTitle>
                <span class="benefits-header">
                  <i class="fas fa-home mr-1"></i>Lorem Ipsum
                </span>
              </CardTitle>
              <CardText>{lorem}</CardText>
            </Card>
          </Col>
          <Col sm={{size: 4, order: 0, offset: 0}}>
            <Card body outline color="danger">
              <CardTitle>
                <span class="benefits-header">
                  <i class="fas fa-home mr-1"></i>Lorem Ipsum
                </span>
              </CardTitle>
              <CardText>{lorem}</CardText>
            </Card>
          </Col>
          <Col sm={{size: 4, order: 0, offset: 0}}>
            <Card body outline color="danger">
              <CardTitle>
                <span class="benefits-header">
                  <i class="fas fa-home mr-1"></i>Lorem Ipsum
                </span>
              </CardTitle>
              <CardText>{lorem}</CardText>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm={{size: 4, order: 0, offset: 0}}>
            <Card body outline color="danger">
              <CardTitle>
                <span class="benefits-header">
                  <i class="fas fa-home mr-1"></i>Lorem Ipsum
                </span>
              </CardTitle>
              <CardText>{lorem}</CardText>
            </Card>
          </Col>
          <Col sm={{size: 4, order: 0, offset: 0}}>
            <Card body outline color="danger">
              <CardTitle>
                <span class="benefits-header">
                  <i class="fas fa-home mr-1"></i>Lorem Ipsum
                </span>
              </CardTitle>
              <CardText>{lorem}</CardText>
            </Card>
          </Col>
          <Col sm={{size: 4, order: 0, offset: 0}}>
            <Card body outline color="danger">
              <CardTitle>
                <span class="benefits-header">
                  <i class="fas fa-home mr-1"></i>Lorem Ipsum
                </span>
              </CardTitle>
              <CardText>{lorem}</CardText>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Differential;