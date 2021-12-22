import React from "react";
import { Link } from "react-router-dom";
// REACT BOOTSTRAP
import { Offcanvas, Card, Row, Col, Button } from "react-bootstrap";
// REACT UNICONS
import { UilShoppingBag, UilTimes } from "@iconscout/react-unicons";
// STYLINGS MODULES
import images from "../../styles/images.module.scss";

const CartsCanvas = ({
  show,
  handleClose,
  cartItemsTotal,
  updateItemCart,
  removeAllItems,
}) => {
  // console.log(cartItemsTotal);
  const totalItems = cartItemsTotal.total_items;

  // console.log(cartItemsTotal);

  const EmptyCart = () => (
    <div className="text-center">
      <p className="lead px-3">Your shopping bag is empty. Start shopping</p>
    </div>
  );

  const CartItems = () => (
    <>
      {cartItemsTotal.line_items.map((item, id) => (
        <Card className="border-bottom-0 rounded-0" key={id}>
          <Card.Body>
            <Row className="align-items-center">
              <Col xs="auto">
                <img
                  className={images.img_carts_items + " sm mr-3"}
                  src={item.image.url}
                  alt={item.name}
                  width={100}
                  height={100}
                />
              </Col>
              <Col>
                <h6 className="small mb-3">
                  <Link
                    to={"/product/" + item.product_id}
                    className="text-decoration-none"
                  >
                    {item.name}
                  </Link>
                </h6>
                <p className="small mb-0 fw-bold text-primary">
                  {item.price.formatted_with_symbol} x {item.quantity}
                </p>
              </Col>
              <Col xs="auto">
                <Button
                  variant="link"
                  className="text-primary"
                  onClick={() => removeAllItems(item.id)}
                >
                  <UilTimes />
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </>
  );

  const CartButtons = () => (
    <div className="d-grid gap-2 px-3 py-3">
      <Link className="btn btn-primary" to="/checkout" onClick={handleClose}>
        Check Out Now
      </Link>
      <Link
        className="btn btn-outline-primary"
        to="/carts"
        onClick={handleClose}
      >
        View Cart
      </Link>
    </div>
  );

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton className="pb-0">
          <Offcanvas.Title>
            <UilShoppingBag className="me-2" />
            {cartItemsTotal.total_unique_items <= 1
              ? cartItemsTotal.total_unique_items + " Item"
              : cartItemsTotal.total_unique_items + " Items"}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="pt-0 px-0 mt-3">
          {totalItems === 0 ? <EmptyCart /> : <CartItems />}
        </Offcanvas.Body>
        <CartButtons />
      </Offcanvas>
    </>
  );
};

export default CartsCanvas;
