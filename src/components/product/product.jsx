import React from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";

function Product() {
  const CategoryBreadcrumb = () => (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Product</Breadcrumb.Item>
      <Breadcrumb.Item active>Computer & Laptop</Breadcrumb.Item>
    </Breadcrumb>
  );

  const ProductDetails = () => <CategoryBreadcrumb />;

  return (
    <>
      <Container className="py-5">
        <Row>
          <Col md={6}></Col>
          <Col md={6}>
            <ProductDetails />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Product;
