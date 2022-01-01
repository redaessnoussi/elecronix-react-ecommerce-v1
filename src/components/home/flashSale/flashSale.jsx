import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CountdownTimer from "./countdownTimer/countdownTimer";
import Slider from "./slider/slider";

function FlashSale({ requests }) {
  return (
    <Container className="py-5">
      <Row className="align-items-center mb-4">
        <Col xs="8">
          <h1 className="fw-bold mb-0">Flash Sale</h1>
        </Col>
        <Col className="d-none">
          <CountdownTimer />
        </Col>
        <Col xs="4" className="text-end">
          <p className="mb-0">
            <Link to="/products" className="text-primary text-decoration-none">
              View All
            </Link>
          </p>
        </Col>
      </Row>
      <Slider requests={requests} />
    </Container>
  );
}

export default FlashSale;
