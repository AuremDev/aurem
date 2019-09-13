import React from "react";
import {Container,
  Row,
  Col,
  Jumbotron,
  Toast,
  ToastHeader,
  ToastBody,
  Button
} from "reactstrap"
function Evaluation() {
  return(
    <>
      <Jumbotron>
        <Container>
          <Row>
            <Col>
              <Row>
                <Col sm={{size: 12, order: 2, offset: 0}}>
                  <p>Experiências de quem já utilizou nosso serviço</p>
                  <p><Button color="info">Saiba Mais</Button></p>
                </Col>
              </Row>
              <Row>
                <Col sm={{size: 12, order: 2, offset: 2}}>
                  <div className="p-3 my-1 rounded">
                    <Toast>
                      <ToastHeader>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        </ToastHeader>
                      <ToastBody>
                        -Rafael Breno
                      </ToastBody>
                    </Toast>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={{size: 12, order: 2, offset: 4}}>
                  <div className="p-3 my-1 rounded">
                    <Toast>
                      <ToastHeader>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        </ToastHeader>
                      <ToastBody>
                        -Rafael Breno
                      </ToastBody>
                    </Toast>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col sm={{size: 12, order: 2, offset: 5}}>
                  <div className="p-3 my-1 rounded">
                    <Toast>
                      <ToastHeader>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        </ToastHeader>
                      <ToastBody>
                        -Rafael Breno
                      </ToastBody>
                    </Toast>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={{size: 12, order: 2, offset: 2}}>
                  <div className="p-3 my-1 rounded">
                    <Toast>
                      <ToastHeader>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        </ToastHeader>
                      <ToastBody>
                        -Rafael Breno
                      </ToastBody>
                    </Toast>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={{size: 12, order: 2, offset: 4}}>
                  <div className="p-3 my-1 rounded">
                    <Toast>
                      <ToastHeader>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        </ToastHeader>
                      <ToastBody>
                        -Rafael Breno
                      </ToastBody>
                    </Toast>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      </>
  );
}

export default Evaluation;