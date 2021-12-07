import React, { useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";
import {
  Col,
  Container,
  Card,
  Row,
  Button,
  Accordion,
  Form,
  Badge,
  Spinner,
  Image,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { Link } from "react-router-dom";
// FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// SOLID ICONS
import {
  faPlus,
  faMinus,
  faTrashAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
// REACT UNICONS
import { UilAngleRightB } from "@iconscout/react-unicons";
// STYLINGS MODULES
import cards from "../../styles/cards.module.scss";
import fonts from "../../styles/typography.module.scss";

const ViewCarts = ({
  cartItemsTotal,
  updateItemCart,
  removeAllItems,
  checkoutToken,
}) => {
  const totalItems = cartItemsTotal.total_items;
  const items = cartItemsTotal.line_items;
  const [shippingCountries, setShippingCountries] = useState({});
  const [shippingCountry, setShippingCountry] = useState("");
  const [countrySubdivisions, setCountrySubdivisions] = useState({});
  const [countrySubdivision, setCountrySubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState({});
  const [shippingPrice, setShippingPrice] = useState("");

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

  const LoadingSpinner = (color) => (
    <>
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      <span className="visually-hidden">Loading...</span>
    </>
  );

  const ReduceItem = ({ itemID, itemQuantity }) => {
    if (itemQuantity === 1) {
      return (
        <Button variant="light" size="sm" className="text-black-50 disabled">
          <FontAwesomeIcon icon={faMinus} />
        </Button>
      );
    } else {
      return (
        <Button
          variant="primary"
          size="sm"
          onClick={() => updateItemCart(itemID, itemQuantity - 1)}
        >
          <FontAwesomeIcon icon={faMinus} />
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
      <FontAwesomeIcon icon={faPlus} />
    </Button>
  );

  const CartItems = () => (
    <>
      {items
        ? items.map((item, index) => (
            <div
              className="d-flex align-items-center border-1 border-primary border-bottom py-4"
              key={index}
            >
              <div className="flex-shrink-0">
                <img src={item.image.url} alt={item.name} width="70" />
              </div>
              <div className="flex-grow-1 ms-4">
                <h6 className="mt-0">{item.name}</h6>
                <p className="text-primary">
                  {item.price.formatted_with_symbol}
                </p>
                <div className="align-items-center d-flex">
                  {/* REDUCE ITEM ON CARTS */}
                  <ReduceItem itemID={item.id} itemQuantity={item.quantity} />
                  <span className="mx-3 text-primary">{item.quantity}</span>
                  {/* INCREASE ITEM ON CARTS */}
                  <IncreaseItem itemID={item.id} itemQuantity={item.quantity} />
                </div>
              </div>
              <Button variant="btn-link">
                <FontAwesomeIcon icon={faTimes} />
              </Button>
            </div>
          ))
        : null}
    </>
  );

  const CouponCard = () => (
    <Accordion defaultActiveKey="0" className="mb-4">
      <Card className={cards.cards__grey25 + " border border-primary mb-4"}>
        <Card.Body className="text-center">
          <CustomToggle eventkey="0" />
          <Accordion.Collapse eventkey="0" className="mt-3">
            <InputGroup className="mx-auto w-75">
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

  const CheckoutBtn = () => (
    <>
      <Row className="justify-content-between">
        <Col xs="auto">
          <h5>
            <Link to="/">Continue Shopping</Link>
          </h5>
        </Col>
        <Col xs="auto">
          <Button variant="primary" size="lg" className="px-4">
            Check Out
          </Button>
        </Col>
      </Row>
    </>
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
                <LoadingSpinner />
              )}
            </p>
          </div>
          <div className="d-grid gap-2">
            <Button className="py-2">Checkout</Button>
            <Button
              variant="link"
              className={fonts.fw_500 + " text-primary text-decoration-none"}
            >
              Continue Shopping
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );

  useEffect(() => {
    const fetchShippingContries = async () => {
      try {
        const shippingCountries =
          await commerce.services.localeListShippingCountries(checkoutToken);
        setShippingCountries(shippingCountries);
        const entries = Object.entries(shippingCountries).map(
          ([code, name]) => ({ id: code, lable: name })
        );
        const countries = Object.keys(entries[0].lable);
        setShippingCountry(countries[0]);
      } catch (error) {
        console.log(error);
      }
    };
    checkoutToken && fetchShippingContries();
  }, [checkoutToken]);

  useEffect(() => {
    const fetchCountrySubdivisions = async (countryCode) => {
      try {
        const countrySubdivisions =
          await commerce.services.localeListSubdivisions(countryCode);
        setCountrySubdivisions(countrySubdivisions);
        const entries = Object.entries(countrySubdivisions).map(
          ([code, name]) => ({ id: code, lable: name })
        );
        const subdivisions = Object.keys(entries[0].lable);
        setCountrySubdivision(subdivisions[0]);
      } catch (error) {
        console.log(error);
      }
    };
    shippingCountry && fetchCountrySubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    const fetchShippingOptions = async () => {
      const shippingOptions = await commerce.checkout.getShippingOptions(
        checkoutToken,
        {
          country: shippingCountry,
          region: countrySubdivision,
        }
      );
      setShippingOptions(shippingOptions);
      // console.log(shippingOptions);
      setShippingPrice(shippingOptions[0].price.formatted_with_symbol);
    };

    countrySubdivision && fetchShippingOptions();
    // eslint-disable-next-line
  }, [countrySubdivision]);

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
