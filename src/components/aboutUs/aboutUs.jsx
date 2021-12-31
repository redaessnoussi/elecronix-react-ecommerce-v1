import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";

function AboutUs() {
  const About = () => (
    <div className="text-center mb-5">
      <h1>About Elecronix</h1>
      <div className="w-75 mx-auto mb-5">
        <p>
          We are here to provide a place special for electronic devices.
          Although we only operated for 2 years but we always provide the best
          service for customers and all the sellers who use our website. With
          the hope that it can help improve a better life using various
          electronic goods with the latest technology, we are all ears to any
          suggestion from our dear customers.
        </p>
      </div>
      <Image
        src="/images/team.jpg"
        className="img-thumbnail"
        style={{ height: "500px" }}
      />
    </div>
  );

  const ChoosingUs = () => (
    <div className="text-center pt-5 mb-5">
      <h1 className="mb-5">Why Choosing Us</h1>
      <Row>
        <Col md="3">
          <Image
            src="/images/quality.svg"
            width="64"
            height="64"
            className="mb-4"
          />
          <h5 className="fw_600">54 Brands</h5>
          <p className="text-black-50 mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>
        </Col>
        <Col md="3">
          <Image
            src="/images/fast-delivery.svg"
            width="64"
            height="64"
            className="mb-4"
          />
          <h5 className="fw_600">Fast Delivery</h5>
          <p className="text-black-50 mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>
        </Col>
        <Col md="3">
          <Image
            src="/images/cash-delivery.svg"
            width="64"
            height="64"
            className="mb-4"
          />
          <h5 className="fw_600">COD Service</h5>
          <p className="text-black-50 mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>
        </Col>
        <Col md="3">
          <Image
            src="/images/quality-2.svg"
            width="64"
            height="64"
            className="mb-4"
          />
          <h5 className="fw_600">100% Original Products</h5>
          <p className="text-black-50 mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>
        </Col>
      </Row>
    </div>
  );

  const OurTeam = () => (
    <div className="text-center pt-5 mb-5">
      <h1 className="mb-4">Our Team</h1>
      <div className="w-75 mx-auto mb-5">
        <p className="text-black-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <Row className="pt-4">
        <Col md="3">
          <Card>
            <Card.Img
              variant="top"
              src="/images/team-0.jpg"
              height="300"
              className="img-cover"
            />
            <Card.Body>
              <Card.Title>Sam Alabama</Card.Title>
              <Card.Text>Chief Executive Officer</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="3">
          <Card>
            <Card.Img
              variant="top"
              src="/images/team-1.jpg"
              height="300"
              className="img-cover"
            />
            <Card.Body>
              <Card.Title>Athen Kamsia</Card.Title>
              <Card.Text>Chief Technical Officer</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="3">
          <Card>
            <Card.Img
              variant="top"
              src="/images/team-2.jpg"
              height="300"
              className="img-cover"
            />
            <Card.Body>
              <Card.Title>Jack Lentera</Card.Title>
              <Card.Text>Senior Recruiter</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="3">
          <Card>
            <Card.Img
              variant="top"
              src="/images/team-3.jpg"
              height="300"
              className="img-cover"
            />
            <Card.Body>
              <Card.Title>Ahmad Pucelle</Card.Title>
              <Card.Text>Project Manager</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );

  return (
    <>
      <Container className="py-5">
        {/* ABOUT US */}
        <About />
        {/* Why Choosing Us */}
        <ChoosingUs />
        {/* Out Teams */}
        <OurTeam />
      </Container>
    </>
  );
}

export default AboutUs;
