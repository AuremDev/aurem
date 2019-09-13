import React from "react";
//import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row
} from "reactstrap";

function SignUp() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  return (
    <>
    <div
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("assets/img/bg12.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px"
        }}
    >
      <Container>
        <Row>
          <Card className="card-signup" data-background-color="blue">
            <CardHeader className="text-center">
              <Form action="" method="" className="form">
                <CardTitle className="title-up" tag="h4">
                  SignUp
                  <div className="social-line">
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="facebook"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="twitter"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="google"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                  </div>
                </CardTitle>
                <CardBody>
                  <InputGroup className={ "no-border" + (firstFocus ? "input-group-focus" : "")}>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i class="fas fa-user"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="First Name..."
                      type="text"
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    >
                    </Input>
                  </InputGroup>
                  <InputGroup className={ "no-border" + (lastFocus ? "input-group-focus" : "")}>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i class="fas fa-user"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Last Name..."
                      type="text"
                      onFocus={() => setLastFocus(true)}
                      onBlur={() => setLastFocus(false)}
                    >
                    </Input>
                  </InputGroup>
                  <InputGroup className={ "no-border" + (emailFocus ? "input-group-focus" : "")}>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i class="fas fa-envelope"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="E-mail..."
                      type="text"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    >
                    </Input>
                  </InputGroup>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="lg"
                  >
                    Sign Up Now
                  </Button>
                </CardFooter>
              </Form>
            </CardHeader>
          </Card>  
        </Row>  
      </Container>    
    </div>
    </>
  );
}

export default SignUp;