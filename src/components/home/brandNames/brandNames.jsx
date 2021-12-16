import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

function BrandNames() {
  const ImageBrand = ({ filename }) => (
    <Col xs="auto" className="me-4">
      <Image src={"./images/" + filename} width="130" height="40" />
    </Col>
  );

  return (
    <>
      <Container className="my-5 py-5">
        <Row className="justify-content-center align-items-baseline">
          <ImageBrand filename="brand-1.svg" />
          <ImageBrand filename="brand-2.svg" />
          <ImageBrand filename="brand-3.svg" />
          <ImageBrand filename="brand-4.svg" />
          <ImageBrand filename="brand-5.svg" />
          <ImageBrand filename="brand-6.svg" />
        </Row>
      </Container>
    </>
  );
}

export default BrandNames;
