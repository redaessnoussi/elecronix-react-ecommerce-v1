import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { BiMap } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import {
  UilInstagram,
  UilTwitter,
  UilFacebook,
} from "@iconscout/react-unicons";

function Contact() {
  return (
    <Container className="py-5">
      <Row>
        <Col md="7">
          <h1 className="mb-4">Contact Us</h1>
          <p className="text-black-50 mb-5">
            Learn more about our products and services to get a better
            experience in shopping at our website. Please complete this form to
            get the latest information from us. Our Customer Service is
            available on 24/7. The information you provide will be confidential
            and not shared with third parties.
          </p>
        </Col>
        <Col md="7">
          <Card>
            <Card.Body className="p-5">
              <Form>
                <Form.Group className="mb-4" controlId="name">
                  <Form.Label>Name *</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="email">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="subject">
                  <Form.Label>Subject *</Form.Label>
                  <Form.Control as="textarea" rows={5} />
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center">
                  <Form.Group controlId="terms-checkbox">
                    <Form.Check
                      type="checkbox"
                      label="Accept Terms & Condition"
                      className="small"
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="px-5 py-2">
                    Submit
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md="5">
          <Card bg="primary" className="h-100">
            <Card.Body className="text-white p-5">
              <h2 className="mb-4">Contact</h2>
              <Row className="mb-3">
                <Col sm="auto" className="pe-0">
                  <BiMap style={{ width: "32px", height: "32px" }} />
                </Col>
                <Col>
                  <p className="fw-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col sm="auto" className="pe-0">
                  <BsTelephone style={{ width: "32px", height: "32px" }} />
                </Col>
                <Col>
                  <p className="fw-normal">+1234567890</p>
                </Col>
              </Row>
              <Row className="mb-5">
                <Col sm="auto" className="pe-0">
                  <HiOutlineMail style={{ width: "32px", height: "32px" }} />
                </Col>
                <Col>
                  <p className="fw-normal">lovia@support.com</p>
                </Col>
              </Row>
              <h6>Follow Us</h6>
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <Button variant="link" className="px-0 me-2">
                    <UilInstagram className="text-white" />
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button variant="link" className="px-0 me-2">
                    <UilFacebook className="text-white" />
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button variant="link" className="px-0">
                    <UilTwitter className="text-white" />
                  </Button>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
