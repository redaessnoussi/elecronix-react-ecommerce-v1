import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";

function CartSteps() {
  return (
    <>
      <Container className="pt-5">
        <Row className="justify-content-center align-items-center">
          <Col md="auto" className="d-flex align-items-center">
            <Badge pill bg="primary" className="fs-5 me-2">
              1
            </Badge>
            <h5 className="text-primary mb-0">My Cart</h5>
          </Col>
          <Col md="3" className="px-4">
            <hr className="bg-black" />
          </Col>
          <Col md="auto" className="d-flex align-items-center">
            <Badge pill bg="primary" className="fs-5 me-2">
              2
            </Badge>
            <h5 className="text-primary mb-0">Checkout</h5>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CartSteps;
