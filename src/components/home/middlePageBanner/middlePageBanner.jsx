import React from "react";
import { Button, Card, Container } from "react-bootstrap";

function MiddlePageBanner() {
  return (
    <>
      <Container className="py-5">
        <Card bg="primary-100" className="text-center py-5">
          <Card.Body>
            <h1 className="fw-bold">Get Best Quality Device</h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <Button size="lg" variant="outline-primary px-5">
              Shop Now
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default MiddlePageBanner;
