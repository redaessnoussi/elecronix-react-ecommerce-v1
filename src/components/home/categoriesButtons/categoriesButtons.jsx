import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function CategoriesButtons() {
  return (
    <Container className="py-4">
      <h3 className="fw-bold mb-3">Category</h3>
      <Row className="gap-y-20">
        <Col xs="6" md="4" lg className="text-center position-relative">
          <Button variant="link" className="border mb-3 p-2">
            <Image src="/images/laptop.svg" width="40" />
          </Button>
          <p className="mb-0">
            <Link className="stretched-link mb-0" to="/products">
              Computer & Laptop
            </Link>
          </p>
        </Col>
        <Col xs="6" md="4" lg className="text-center position-relative">
          <Button variant="link" className="border mb-3 p-2">
            <Image src="/images/smartphone.svg" width="40" />
          </Button>
          <p className=" mb-0">
            <Link className="stretched-link mb-0" to="/products">
              Mobile & Tablet
            </Link>
          </p>
        </Col>
        <Col xs="6" md="4" lg className="text-center position-relative">
          <Button variant="link" className="border mb-3 p-2">
            <Image src="/images/camera.svg" width="40" />
          </Button>
          <p className="mb-0">
            <Link className="stretched-link mb-0" to="/products">
              Camera
            </Link>
          </p>
        </Col>
        <Col xs="6" md="4" lg className="text-center position-relative">
          <Button variant="link" className="border mb-3 p-2">
            <Image src="/images/smartbox.svg" width="40" />
          </Button>
          <p className="mb-0">
            <Link className="stretched-link mb-0" to="/products">
              TV & Smart Box
            </Link>
          </p>
        </Col>
        <Col xs="6" md="4" lg className="text-center position-relative">
          <Button variant="link" className="border mb-3 p-2">
            <Image src="/images/appliance.svg" width="40" />
          </Button>
          <p className="mb-0">
            <Link className="stretched-link mb-0" to="/products">
              Home Appliance
            </Link>
          </p>
        </Col>
        <Col xs="6" md="4" lg className="text-center position-relative">
          <Button variant="link" className="border mb-3 p-2">
            <Image src="/images/accessories.svg" width="40" />
          </Button>
          <p className="mb-0">
            <Link className="stretched-link mb-0" to="/products">
              Accessories
            </Link>
          </p>
        </Col>
        <Col xs="6" md="4" lg className="text-center position-relative">
          <Button variant="link" className="border mb-3 p-2">
            <Image src="/images/joystick.svg" width="40" />
          </Button>
          <p className="mb-0">
            <Link className="stretched-link mb-0" to="/products">
              Other Categories
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default CategoriesButtons;
