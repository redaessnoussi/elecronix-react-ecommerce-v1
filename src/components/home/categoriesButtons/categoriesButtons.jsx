import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

function CategoriesButtons() {
  return (
    <Container className="py-4">
      <h3 className="fw-bold mb-4">Category</h3>
      <Row>
        <Col className="text-center">
          <Button variant="link" className="border mb-3 p-2">
            <Image src="./images/laptop.svg" width="40" />
          </Button>
          <p className="mb-0">Computer & Laptop</p>
        </Col>
        <Col className="text-center">
          <Button variant="link" className="border mb-3 p-2">
            <Image src="./images/smartphone.svg" width="40" />
          </Button>
          <p className="mb-0">Mobile & Tablet</p>
        </Col>
        <Col className="text-center">
          <Button variant="link" className="border mb-3 p-2">
            <Image src="./images/camera.svg" width="40" />
          </Button>
          <p className="mb-0">Camera</p>
        </Col>
        <Col className="text-center">
          <Button variant="link" className="border mb-3 p-2">
            <Image src="./images/smartbox.svg" width="40" />
          </Button>
          <p className="mb-0">TV & Smart Box</p>
        </Col>
        <Col className="text-center">
          <Button variant="link" className="border mb-3 p-2">
            <Image src="./images/appliance.svg" width="40" />
          </Button>
          <p className="mb-0">Home Appliance</p>
        </Col>
        <Col className="text-center">
          <Button variant="link" className="border mb-3 p-2">
            <Image src="./images/accessories.svg" width="40" />
          </Button>
          <p className="mb-0">Accessories</p>
        </Col>
        <Col className="text-center">
          <Button variant="link" className="border mb-3 p-2">
            <Image src="./images/joystick.svg" width="40" />
          </Button>
          <p className="mb-0">Other Categories</p>
        </Col>
      </Row>
    </Container>
  );
}

export default CategoriesButtons;
