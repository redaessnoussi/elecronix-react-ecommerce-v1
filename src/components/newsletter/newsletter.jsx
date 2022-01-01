import React from "react";
import {
  Container,
  Image,
  FormControl,
  InputGroup,
  Button,
  Col,
  Row,
} from "react-bootstrap";

function Newsletter() {
  return (
    <div className="bg-primary py-5">
      <Container>
        <Row className="text-white">
          <Col lg="auto" md="2" className="d-none d-md-block mb-md-4">
            <Image src="/images/newspaper.svg" className="img-fluid" />
          </Col>
          <Col lg="6" md="10" xs="12" className="mb-md-4">
            <h1 className="fw-bold">Join our newsletter now!</h1>
            <p>Register now and get our latest updates and promos.</p>
          </Col>
          <Col lg xs="12">
            <InputGroup className="bg-white input-group p-2 rounded-3 border-0">
              <FormControl
                placeholder="Enter your email"
                aria-label="Enter your email"
                aria-describedby="basic-email-join"
                className="border-0 shadow-none me-1"
              />
              <Button
                variant="dark-90"
                id="email-join"
                className="px-4 py-2 rounded-3 border-0"
              >
                <span className="fw-bolder">Join</span>
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Newsletter;
