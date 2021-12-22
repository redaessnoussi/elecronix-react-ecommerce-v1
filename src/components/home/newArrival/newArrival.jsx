import React from "react";
import { Badge, Card, Col, Container, Row, Image } from "react-bootstrap";
// REACT ICONS
import { AiFillStar } from "react-icons/ai";
// STYLINGS MODULES
import images from "../../../styles/images.module.scss";
import icons from "../../../styles/icons.module.scss";
import { Link } from "react-router-dom";

function NewArrival({ products }) {
  // console.log("rrr");
  // console.log(products);

  const ProductCards = () =>
    products?.map(
      (product, index) =>
        index < 3 && (
          <Col md="4" key={index}>
            <Card className="align-items-start h-100">
              <Card.Body className="d-flex flex-column justify-content-between">
                <Badge
                  pill
                  bg="primary"
                  className="fw-light py-3 rounded-circle rounded-pill align-self-baseline"
                >
                  NEW
                </Badge>
                <Row className="align-items-center">
                  <Col md="auto">
                    <Image
                      src={product.image.url}
                      className={images.img__products_2}
                    />
                  </Col>
                  <Col
                    md="6"
                    className="d-flex flex-column justify-content-between"
                  >
                    <p className="mb-2">
                      <Link
                        to={"/product/" + product.id}
                        className="stretched-link text-decoration-none"
                      >
                        {product.name}
                      </Link>{" "}
                    </p>
                    <h5 className="fw-bold mb-4">
                      {product.price.formatted_with_symbol}
                    </h5>
                    <div className="d-flex align-items-center">
                      <AiFillStar
                        className={icons.star + " me-2"}
                        width="19"
                        height="19"
                      />{" "}
                      <span className="small text-black-50">
                        5.0 <span className="mx-2">|</span> Sold 99
                      </span>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        )
    );

  return (
    <>
      <Container className="py-5">
        <Row className="align-items-center mb-3">
          <Col>
            <h3 className="fw-bold mb-0">New Arrival</h3>
          </Col>
          <Col className="text-end">
            <p className="text-primary mb-0">View All</p>
          </Col>
        </Row>
        <Row>
          <ProductCards />
        </Row>
      </Container>
    </>
  );
}

export default NewArrival;
