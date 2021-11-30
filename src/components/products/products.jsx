import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
// STYLINGS MODULES
import images from "../../styles/images.module.scss";
import cards from "../../styles/cards.module.scss";

function products({ products, addCarts }) {
  // console.table(products)

  return (
    <div className="container pt-5">
      <h1>Products</h1>
      <Container>
        <Row>
          {products.map((product, i) => (
            <Col md="4" key={i} className="mb-4">
              <Card className={cards.cards__products + " h-100"}>
                <Card.Img
                  variant="top"
                  src={product.image.url}
                  className={images.img__products + " mt-4"}
                />
                <Card.Body>
                  <div>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text
                      dangerouslySetInnerHTML={{ __html: product.description }}
                      className={cards.description__product}
                    ></Card.Text>
                  </div>
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
      </Container>
    </div>
  );
}

export default products;
