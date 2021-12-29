import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountdownTimer from "./countdownTimer/countdownTimer";
import Slider from "./slider/slider";

function FlashSale({ requests }) {
  return (
    <Container className=" py-5">
      <Row className="align-items-center mb-4">
        <Col md="auto">
          <h1 className="fw-bold mb-0">Flash Sale</h1>
        </Col>
        <CountdownTimer />
        {/* <Col md="auto">{timer && }</Col> */}
        <Col className="text-end">
          <p className="text-primary mb-0">View All</p>
        </Col>
      </Row>
      <Slider requests={requests} />
    </Container>
  );
}

export default FlashSale;
