import React from "react";
import MaskedInput from "react-text-mask";
// reactstrap components
import {
  Modal,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Label,
  Input,
//  FormText
} from "reactstrap";
// core components

function LoginModal(){
  const [modalLive, setModalLive] = React.useState(false);
  return (
    <>
      <Button
        color="info"
        type="button"
        onClick={() => setModalLive(true)}
      >
        <i class="fas fa-user mr-1"></i>Login
      </Button>
      <Modal toggle={() => setModalLive(false)} isOpen={modalLive}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLiveLabel">
            Login
          </h5>
          <button
            aria-label="Close"
            className="close"
            type="button"
            onClick={() => setModalLive(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <Form>
            <Row form>
              <Col lg={6} md={6} sm={12}>
                <FormGroup>
                  <Label for="email">E-mail:</Label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i class="fas fa-envelope"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="email" name="email" id="email" placeholder="fulano@hotmail.com" />
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <FormGroup>
                  <Label for="cnpj">CNPJ:</Label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i class="fas fa-building"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                      <MaskedInput
                        mask={[/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', '0', '0', '0', '1', '-', /\d/, /\d/]}
                        class="form-control"
                      />
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
            <Row form class="justify-content-center">
              <Col lg={8} md={8} sm={12}>
                <FormGroup>
                  <Label for="password">Password:</Label>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i class="fas fa-key"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="password" name="password" id="password" placeholder="******" />
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="modal-footer">
          <Button
            color="secondary"
            type="button"
            onClick={() => setModalLive(false)}
          >
            Fechar
          </Button>
          <Button
            color="primary"
            type="button"
            onClick={() => setModalLive(false)}
          >
            <i class="fas fa-sign-in-alt mr-1"></i>Entrar
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default LoginModal;