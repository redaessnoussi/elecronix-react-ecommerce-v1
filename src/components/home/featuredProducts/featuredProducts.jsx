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
        <Button variant="outline-grey-70">Shop Now</Button>
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
                  <p>{product.name}</p>
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
                    onClick={() => addCarts(products[0].id, 1)}
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
            <Row>
              <Col>
                <h3 className="fw-bold">Featured Products</h3>
              </Col>
              <Col className="text-end">
                <p className="text-primary">View All</p>
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
