import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
// STYLINGS MODULES
import images from "../../styles/images.module.scss";
import cards from "../../styles/cards.module.scss";

function products({ products, addCarts }) {
  // console.table(products)

  return (
    <div className="container pt-5">
      <h1>New Arrival</h1>
      <Row>
        {products.map((product, i) => (
          <Col md="4" key={i} className="mb-4">
            <Card className={cards.cards__products + " h-100"}>
              <Card.Img
                variant="top"
                src={product.image.url}
                className={images.img__products + " mt-4"}
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <p>{product.name}</p>
                <Button
                  variant="primary"
                  onClick={() => addCarts(product.id, 1)}
                >
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default products;
