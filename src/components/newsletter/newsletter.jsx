import React from "react";
import {
  Container,
  Image,
  FormControl,
  InputGroup,
  Button,
  Col,
} from "react-bootstrap";

function Newsletter() {
  return (
    <div className="bg-primary py-5">
      <Container>
        <div className="d-flex text-white">
          <div className="flex-shrink-0">
            <Image src="./images/newspaper.svg" />
          </div>
          <div className="flex-grow-1 ms-4 d-flex flex-column justify-content-between">
            <h1 className="fw-bold mb-0">Join our newsletter now!</h1>
            <p className="mb-0">
              Register now and get our latest updates and promos.
            </p>
          </div>
          <Col md="4">
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
        </div>
      </Container>
    </div>
  );
}

export default Newsletter;
