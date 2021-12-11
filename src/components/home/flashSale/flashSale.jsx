import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "./slider/slider";

function FlashSale({ requests }) {
  return (
    <Container className="my-5 py-5">
      <Row className="align-items-center">
        <Col>
          <h2 className="display-5 mb-0">Flash Sale</h2>
        </Col>
        <Col className="text-end">
          <p className="text-primary fs-5 mb-0">View All</p>
        </Col>
      </Row>
      <Slider requests={requests} />
    </Container>
  );
}

export default FlashSale;
