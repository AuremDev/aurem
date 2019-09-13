import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Images() {
  return (
    <>
      <div className="section section-images">
        <Container>
          <Row>
            <Col md="12">
              <div className="hero-images-container">
                <img
                  alt="..."
                  src={require("assets/img/running-astro.png")}
                ></img>
              </div>
              <div className="hero-images-container-1">
                <img
                  alt="..."
                  src={require("assets/img/floating-astro.png")}
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Images;
