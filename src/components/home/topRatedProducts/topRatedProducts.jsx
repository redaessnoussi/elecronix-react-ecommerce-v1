import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
// REACT ICONS
import { AiFillStar, AiFillHeart } from "react-icons/ai";
// STYLINGS MODULES
import images from "../../../styles/images.module.scss";
import icons from "../../../styles/icons.module.scss";

function TopRatedProducts({ products, addCarts }) {
  // console.log("xxxx");
  // console.log(products);

  const TopProductCard = () =>
    products.map(
      (product, index) =>
        index < 4 && (
          <Col md="3" key={index}>
            <Card className="h-100">
              <Card.Body className="text-center d-flex flex-column justify-content-between align-items-center">
                <Image
                  src={product.image.url}
                  className={images.img__products_2}
                />
                <div>
                  <p>{product.name}</p>
                  <div className="d-flex justify-content-center align-items-center mb-3">
                    <AiFillStar
                      className={icons.star + " me-2"}
                      width="19"
                      height="19"
                    />{" "}
                    <span className="small text-black-50">
                      5.0 <span className="mx-2">|</span> Sold 99
                    </span>
                  </div>
                  <Button variant="primary" className="px-4 me-2">
                    Add to Cart
                  </Button>
                  <Button
                    variant="link"
                    className="text-decoration-none"
                    onClick={() => addCarts(product.id, 1)}
                  >
                    <AiFillHeart height="20" width="20" />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        )
    );

  return (
    <>
      <Container className="py-5 mb-5">
        <Row className="mb-3">
          <Col>
            <h3 className="fw-bold mb-0">Top Rated Product</h3>
          </Col>
          <Col className="text-end">
            <p className="mb-0 text-primary">View All</p>
          </Col>
        </Row>
        <Row>
          <TopProductCard />
        </Row>
      </Container>
    </>
  );
}

export default TopRatedProducts;
