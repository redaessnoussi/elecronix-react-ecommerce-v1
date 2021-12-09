import React, { useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";
import {
  Col,
  Container,
  Card,
  Row,
  Button,
  Accordion,
  Badge,
  Spinner,
  Image,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { Link } from "react-router-dom";
// REACT UNICONS
import {
  UilAngleRightB,
  UilMinus,
  UilPlus,
  UilTimes,
} from "@iconscout/react-unicons";
// STYLINGS MODULES
import cards from "../../styles/cards.module.scss";
import images from "../../styles/images.module.scss";
import fonts from "../../styles/typography.module.scss";

const ViewCarts = ({
  cartItemsTotal,
  updateItemCart,
  removeAllItems,
  checkoutToken,
  // pagePath,
}) => {
  const totalItems = cartItemsTotal.total_items;
  const items = cartItemsTotal.line_items;

  // console.log(pagePath);

  function CustomToggle({ eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey);

    return (
      <>
        <Badge bg="primary" className="p-2 rounded-3">
          <Image src="./images/coupon.svg" width="20" />
        </Badge>
        <Button
          variant="link"
          className={"text-dark text-decoration-none"}
          eventkey="0"
          onClick={decoratedOnClick}
        >
          Have a coupon code? <UilAngleRightB />
        </Button>
      </>
    );
  }

  const LoadingSpinner = ({ color, size }) => (
    <>
      <Spinner
        variant={color}
        as="span"
        animation="border"
        size={size}
        role="status"
        aria-hidden="true"
      />
      <span className="visually-hidden">Loading...</span>
    </>
  );

  const ReduceItem = ({ itemID, itemQuantity }) => {
    if (itemQuantity === 1) {
      return (
        <Button variant="grey" size="sm" className="text-black-50 disabled">
          <UilMinus />
        </Button>
      );
    } else {
      return (
        <Button
          variant="primary"
          size="sm"
          onClick={() => updateItemCart(itemID, itemQuantity - 1)}
        >
          <UilMinus />
        </Button>
      );
    }
  };

  const IncreaseItem = ({ itemID, itemQuantity }) => (
    <Button
      variant="primary"
      size="sm"
      onClick={() => updateItemCart(itemID, itemQuantity + 1)}
    >
      <UilPlus />
    </Button>
  );

  const CartItems = () => (
    <>
      {items ? (
        items.map((item, index) => (
          <div
            className="d-flex align-items-center border-1 border-primary border-bottom py-4"
            key={index}
          >
            <div className="flex-shrink-0">
              <img
                className={images.img_carts_items}
                src={item.image.url}
                alt={item.name}
                width="70"
                height="70"
              />
            </div>
            <div className="flex-grow-1 ms-4">
              <h6 className="mt-0">{item.name}</h6>
              <p className="text-primary">{item.price.formatted_with_symbol}</p>
              <div className="align-items-center d-flex">
                {/* REDUCE ITEM ON CARTS */}
                <ReduceItem itemID={item.id} itemQuantity={item.quantity} />
                <span className="mx-3 text-primary">{item.quantity}</span>
                {/* INCREASE ITEM ON CARTS */}
                <IncreaseItem itemID={item.id} itemQuantity={item.quantity} />
              </div>
            </div>
            <Button
              variant="link"
              onClick={() => removeAllItems(item.id)}
              className="text-primary"
            >
              <UilTimes />
            </Button>
          </div>
        ))
      ) : (
        <LoadingSpinner color={"primary"} size={"lg"} />
      )}
    </>
  );

  const CouponCard = () => (
    <Accordion defaultActiveKey="0" className="mb-4">
      <Card className={cards.cards__grey25 + " border border-primary mb-4"}>
        <Card.Body className="text-center">
          <CustomToggle eventkey="0" />
          <Accordion.Collapse eventkey="0">
            <InputGroup className="mx-auto w-75 mt-3">
              <FormControl
                placeholder="Enter coupon code..."
                aria-label="Enter coupon code..."
                aria-describedby="coupon"
              />
              <Button variant="primary" id="coupon">
                Apply
              </Button>
            </InputGroup>
          </Accordion.Collapse>
        </Card.Body>
      </Card>
    </Accordion>
  );

  const EmptyCart = () => (
    <>
      <p className="lead px-3">Your shopping bag is empty. Start shopping</p>
    </>
  );

  const ShoppingSummary = () => (
    <>
      <Card className="border-primary">
        <Card.Body>
          <h5 className="mb-4">Summary</h5>
          <div className="d-flex justify-content-between">
            <p className="small mb-0">Total</p>
            <p className={"text-primary mb-4 "}>
              {cartItemsTotal.subtotal ? (
                "$" + cartItemsTotal.subtotal.raw
              ) : (
                <LoadingSpinner color={"primary"} size={"sm"} />
              )}
            </p>
          </div>
          <div className="d-grid gap-2">
            <Link className="btn btn-primary py-2" to="/checkout">
              Checkout
            </Link>
            <Link
              className={
                fonts.fw_500 + " btn btn-link text-primary text-decoration-none"
              }
              to="/"
            >
              Continue Shopping
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );

  return (
    <>
      <Container className="py-5">
        <Row>
          <Col md="8">
            {/* Showing Table */}
            {totalItems === 0 ? <EmptyCart /> : <CartItems />}
            {/* Showing Check Out Button */}
            {/* <CheckoutBtn /> */}
          </Col>
          <Col md="4">
            {/* Coupon Code */}
            <CouponCard />
            {/* Shopping Summary */}
            <ShoppingSummary />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ViewCarts;
