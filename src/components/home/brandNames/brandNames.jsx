import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

function BrandNames() {
  const ImageBrand = ({ filename }) => (
    <Col xs="5" lg="auto">
      <Image src={"./images/" + filename} className="img-fluid" />
    </Col>
  );

  return (
    <>
      <Container className="my-5 py-5">
        <Row className="justify-content-between align-items-center">
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
