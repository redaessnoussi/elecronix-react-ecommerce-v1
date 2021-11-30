import React from "react";
import { Link } from "react-router-dom";
// REACT BOOTSTRAP
import { Offcanvas, Card, Row, Col, Button } from "react-bootstrap";
// FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// SOLID ICONS
import {
  faShoppingBag,
  faPlus,
  faMinus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
// STYLINGS MODULES
import images from "../../styles/images.module.scss";

const Carts = ({
  show,
  handleClose,
  cartItemsTotal,
  updateItemCart,
  removeAllItems,
}) => {
  console.log(cartItemsTotal);
  const totalItems = cartItemsTotal.total_items;

  const EmptyCart = () => (
    <div className="text-center">
      <p className="lead px-3">Your shopping bag is empty. Start shopping</p>
    </div>
  );

  const reduceItem = (itemID, itemQuantity) => {
    if (itemQuantity === 1) {
      return (
        <Button
          variant="outline-primary"
          size="sm"
          className="rounded-circle disabled"
        >
          <FontAwesomeIcon icon={faMinus} />
        </Button>
      );
    } else {
      return (
        <Button
          variant="outline-primary"
          size="sm"
          className="rounded-circle"
          onClick={() => updateItemCart(itemID, itemQuantity - 1)}
        >
          <FontAwesomeIcon icon={faMinus} />
        </Button>
      );
    }
  };

  const CartItems = () => (
    <>
      {cartItemsTotal.line_items.map((item, id) => (
        <Card className="rounded-0" key={id}>
          <Card.Body>
            <Row>
              <Col
                xs="auto"
                className="align-items-center d-flex flex-column justify-content-between"
              >
                {/* INCREASE ITEM ON CARTS */}
                <Button
                  variant="outline-primary"
                  size="sm"
                  className="rounded-circle"
                  onClick={() => updateItemCart(item.id, item.quantity + 1)}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </Button>
                <span>{item.quantity}</span>
                {/* REDUCE ITEM ON CARTS */}
                {reduceItem(item.id, item.quantity)}
              </Col>
              <Col xs="auto">
                <img
                  className={images.img__carts_items + " sm mr-3"}
                  src={item.image.url}
                  alt={item.name}
                  width={100}
                  height={100}
                />
              </Col>
              <Col>
                <h6 className="small mb-0">{item.name}</h6>
                <p className="small mb-1">
                  {item.price.formatted_with_symbol} x {item.quantity}
                </p>
                <h6 className="text-danger">
                  {item.line_total.formatted_with_symbol}
                </h6>
              </Col>
              <Col xs="auto">
                <Button variant="link" onClick={() => removeAllItems(item.id)}>
                  <FontAwesomeIcon icon={faTimes} />
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
      <Link className="btn btn-lg btn-primary" to="/checkout">
        Check Out Now ({cartItemsTotal.subtotal.formatted_with_symbol})
      </Link>
      <Link
        className="btn btn-lg btn-outline-primary"
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
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <FontAwesomeIcon icon={faShoppingBag} className="me-2" />
            {cartItemsTotal.total_unique_items <= 1
              ? cartItemsTotal.total_unique_items + " Item"
              : cartItemsTotal.total_unique_items + " Items"}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="px-0">
          {totalItems === 0 ? <EmptyCart /> : <CartItems />}
        </Offcanvas.Body>
        <CartButtons />
      </Offcanvas>
    </>
  );
};

export default Carts;
