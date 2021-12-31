import React from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";
// STYLINGS MODULES
import images from "../../../styles/images.module.scss";
import badges from "../../../styles/badges.module.scss";
import { Link } from "react-router-dom";

function FeaturedProducts({ products, addCarts }) {
  // console.log("zzz");
  // console.log(products);

  const BestCollection = () => (
    <Card bg="primary" className="h-100 p-4">
      <Card.Body className="text-white">
        <h3>
          Best <br />
          Collection
        </h3>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Link className="btn btn-outline-grey-70" to="/products">
          Shop Now
        </Link>
      </Card.Body>
    </Card>
  );

  // DISCOUNT PERCENT BADGE
  function showDiscount(regularPrice, soldPrice) {
    var discount = Math.round(((regularPrice - soldPrice) / soldPrice) * 100);
    return (
      <Badge className={badges.badge_discount + " fw-light"}>
        {discount}% <br />
        OFF
      </Badge>
    );
  }

  const ProductsCards = () =>
    products?.map(
      (product, key) =>
        key < 3 && (
          <Col md="4" key={key}>
            <Card className="h-100">
              <Card.Body className="text-center d-flex flex-column justify-content-between">
                <div>
                  <div className="text-end">
                    <Badge className="fw-light">New</Badge>
                  </div>
                  <div className="text-end">
                    {showDiscount(
                      product.price.raw,
                      product.price.raw + (product.price.raw * 20) / 100
                    )}
                  </div>
                </div>
                <div>
                  <Image
                    src={product.image.url}
                    className={images.img__products_2}
                  />
                  <p>
                    <Link
                      to={"/product/" + product.id}
                      className="text-decoration-none"
                    >
                      {product.name}
                    </Link>
                  </p>
                  <h6 className="text-primary mb-4">
                    <strike className="text-black-50">
                      {"$" +
                        (
                          product.price.raw +
                          (product.price.raw * 20) / 100
                        ).toFixed(2)}
                    </strike>
                    <span className="mx-2">-</span>
                    {"$" + product.price.raw}
                  </h6>
                  <Button
                    className="px-4"
                    onClick={() => addCarts(product.id, 1)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        )
    );

  return (
    <>
      <Container className="py-5">
        <Row>
          <Col md="3">
            <BestCollection />
          </Col>
          <Col md="9">
            <Row className="mb-3">
              <Col>
                <h3 className="fw-bold mb-0">Featured Products</h3>
              </Col>
              <Col className="text-end">
                <p className="mb-0">
                  <Link
                    to="/products"
                    className="text-primary text-decoration-none"
                  >
                    View All
                  </Link>
                </p>
              </Col>
            </Row>
            <Row>
              <ProductsCards />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FeaturedProducts;
