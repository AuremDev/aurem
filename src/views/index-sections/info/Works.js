import React from "react";
import Lorem from "../Lorem.js";
import {
  Container,
 // Img,
  Row,
  Button,
  Col
} from "reactstrap";
function Works() {
  return (
    <>
      <div className="section">
        <Container>
          <Row>
            <Col>
              <img
                fluid //Responsividade
                alt=""
                src={require("assets/img/video1.jpg")}
              ></img>
            </Col>
            <Col>
              <h4>Como funciona</h4>
              <p><Lorem/></p>
              <p><Button color="info">Saiba Mais</Button></p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Works;